const sumAll = function(startNum,endNum) {
    let sum = 0;
    if(startNum <= endNum){
        for (let i = startNum; i <= endNum; i++) {
            sum = sum + i;
    }
    }else{
        for (let i = startNum; i >= endNum; i--) {
            sum = sum + i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
