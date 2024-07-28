const palindromes = function (palindromeToCheck) {
    let newStr = "";
    let punctuationFilter = palindromeToCheck.replace(/[^\w]/g, '').toLowerCase();
    for (let i = punctuationFilter.length - 1; i >= 0 ; i--) {
        newStr+=punctuationFilter[i];
    }
    if(punctuationFilter === newStr)
        return true; 
    else return false;
   
};

// Do not edit below this line
module.exports = palindromes;
