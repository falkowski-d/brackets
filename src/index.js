module.exports = function check(str, bracketsConfig) {
    let result = [];
    let count = 1;
    let imputStr = str;
    result = bracketsConfig.map(item => imputStr = imputStr.replace((item[0] + item[1]));

    while (count === 1) {

        for (let i = 0; i < result.length; i++) {
            str = str.replace(result[i], '');
        }
        if (str.length === 0) {
            count = 0;
        }
    }
    if (str.length === 0 || str !== imputStr) {
        return true;
    } else return false;



};
