const path = require('path');
const fs = require('fs');
const Handlebars = require('handlebars');

const BUILD_NUMBER = require('./build-number.js');
const PATHS = require('../../config/paths.config.js');
const MODE = require('./mode.js');

/**
 * Loops through Handlebars AST statements, transforming specified statement types. Relies on embedPartials for most of its work.
 * @param  {object} ast   Handlebars AST
 * @param  {Number} loops Keeps track of the number of times this function has been called.
 * @return {object}       Transformed Handlebars AST
 */
function loopAST(ast, loops, currentFile) {
    currentFile = currentFile || PATHS.hbs.folders.root;
    loops = loops || 0;

    // Prevent infinite loops
    if (loops > 50) {
        return ast;
    }

    let newBody = ast.body.map(function(statement, i) {
        statement = addBuildNumber(statement);

        if (typeof statement !== 'undefined') {
            return findPartials(statement, loops, currentFile);
        }

        return statement;
    });

    ast.body = newBody;
    return ast;
};

/**
 * Evaluates Handlebars statements, sniffing for Partials. When a Block statement is found, the statement is passed back to loopAST()
 * @param  {Object} statement Handlebars AST statement
 * @param  {number} loops     How many times this function has been called in this particular loop
 * @return {Object}           Statement with (or without if none exists) an embedded partial
 */
function findPartials(statement, loops, currentFile) {
    // BlockStatements can contain partials, so we'll have to recurse this
    if (statement.type === "BlockStatement") {
        // Check again
        statement.program = loopAST(statement.program, loops++);
        return statement;
    }
    // We found a partial -- let's embed it
    else if (statement.type === "PartialStatement") {
        return embedPartial(statement, currentFile);
    }
    else {
        // If we haven't found anything, then lets just return it
        return statement;
    }
};

/**
 * Takes a Handlebars "PartialStatement", and replaces it with the actual partial's content.
 * @param  {Object} statement Handlebars "PartialStatement"
 * @return {Object}           Handlebars "BlockStatement" with the original partial's content
 */
function embedPartial(statement, currentFile) {
    let partial = statement.name.original;
    let extension = path.extname(partial);
    let context = path.dirname(currentFile);

    if (extension === '') {
        partial += '.hbs';
    }

    try {
        let partialPath = path.resolve(context, partial);
        let file = String(fs.readFileSync(partialPath));

        if (statement.hash) {
            statement.hash.pairs.forEach((hash) => {
                file.replace(hash.key, hash.value.original);
            });
        }
        return Handlebars.parse('{{!-- --}}' + file);
    }
    catch (err) {
        console.error(`Can't find partial: ${partial} in ${currentFile}`);
        throw Error(err);
    }
}


function addBuildNumber(statement) {
    if (statement.type === "MustacheStatement") {
        return replaceBuildNumber(statement);
    }
    return statement;
}

function replaceBuildNumber(statement) {
    if (MODE.production && statement.path.original === 'CACHE_BUST') {
        let cacheBust = '';

        if (!MODE.local) {
            cacheBust = BUILD_NUMBER(cacheBust);
        };

        return {
            type: 'ContentStatement',
            original: cacheBust,
            value: cacheBust,
            loc: statement.path.loc,
            rightStripped: true,
            leftStripped: true
        };
    }

    return statement;
};

module.exports = loopAST;
