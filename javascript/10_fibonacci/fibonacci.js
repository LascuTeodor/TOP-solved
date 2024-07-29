const fibonacci = function(indexToReturn) {
    if(indexToReturn < 0){
        return "OOPS"
    }
    const fibonacciSequence = [0, 1];//initialization of Fibonacci Sequence
    for (let i = 2; i <= indexToReturn; i++) {
        fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        //current position is equal to the previous one  plus the second previous one
    }
    return fibonacciSequence[indexToReturn];//returning the position of the element 
};
//learned how to implement fibonacci sequence to code 
//peaked at the solution :)

// Do not edit below this line
module.exports = fibonacci;
