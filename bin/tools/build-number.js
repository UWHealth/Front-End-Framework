function generateBuildNumber() {
    let today = new Date();
    let y = ("0" + (today.getYear())).slice(-2);
    let m = ("0" + (today.getMonth() + 1)).slice(-2);
    let d = ("0" + (today.getDate())).slice(-2);
    let t = ("0" + (today.getTime())).slice(-2);
    return 'build.' + y + m + d + t + '.';
}

module.exports = generateBuildNumber();
