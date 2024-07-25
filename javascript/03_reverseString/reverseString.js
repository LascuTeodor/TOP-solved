const reverseString = function(stringToReverse) {
    
    // return stringToReverse.split("").reverse().join("");
    let newStr = "";
    for (let i = stringToReverse.length - 1; i >= 0 ; i--) {
        newStr+=stringToReverse[i];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
