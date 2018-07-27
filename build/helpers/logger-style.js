module.exports = {
    'pretty-error': {
        display: 'block',
        marginLeft: '2',
    },
    'pretty-error > header': {
        display: 'block',
    },
    'pretty-error > header > title > kind': {
        display: 'none',
        background: 'red',
        color: 'bright-white',
    },
    'pretty-error > header > title > wrapper': {
        marginRight: '1',
        color: 'grey',
    },
    'pretty-error > header > colon': {
        color: 'grey',
        display: 'none',
        marginRight: '1',
    },
    'pretty-error > header > message': {
        color: 'red',
    },
    'pretty-error > trace': {
        display: 'block',
        marginTop: 1,
    },
    'pretty-error > trace > item': {
        display: 'block',
        marginBottom: 0,
        marginLeft: 3,
        bullet: '"<grey>•</grey>"',
    },
    'pretty-error > trace > item > header': {
        display: 'inline',
    },
    'pretty-error > trace > item > header > pointer > file': {
        display: 'none',
        color: 'cyan',
    },
    'pretty-error > trace > item > header > pointer > colon': {
        display: 'none',
        color: 'bright-cyan',
    },
    'pretty-error > trace > item > header > pointer > line': {
        display: 'none',
        color: 'bright-cyan',
        marginRight: 1,
    },
    'pretty-error > trace > item > header > what': {
        display: 'inline',
        color: 'none',
        marginRight: 1,
    },
    'pretty-error > trace > item > footer > addr': {
        display: 'inline',
        color: 'bright-cyan',
    },
    'pretty-error > trace > item > footer': {
        display: 'inline',
        color: 'grey',
    },
    'pretty-error > trace > item > footer > extra': {
        display: 'block',
        color: 'grey',
    },
};
