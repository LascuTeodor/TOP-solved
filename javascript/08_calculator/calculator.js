const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let sum = 0;
  
    for(let i = 0; i < numArray.length; i++)
      {
        sum += numArray[i];
      }
      return parseInt(sum);
  
  
};


const multiply = function(numArray) {
  let result = 1;
  
    for(let i = 0; i < numArray.length; i++)
      {
        result *= numArray[i];
      }
      return parseInt(result);
};

const power = function() {
	
};

const factorial = function() {
	
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};