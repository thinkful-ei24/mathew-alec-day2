'use strict';

const max = function(numbers) {
  let maxNum = numbers[0];

  let i = 0;

  while (i < numbers.length) {
    if ( numbers[i] > maxNum) {
      maxNum = numbers[i];
    }

    i++;
  }
  return maxNum;
}

console.log(max([1,2,0, -5, 15, 2, -3]));


const min = function(numbers) {
  let minNum = numbers[0];

  let i = 0;

  while (i < numbers.length) {
    if ( numbers[i] < minNum) {
      minNum = numbers[i];
    }

    i++;
  }
  return minNum;
}

console.log(min([1,2,0, -5, 15, 2, -3]));

const average = function(arr){
  //add up all the numbers
  //divide by the number of numbers
  let sum = 0;
arr.forEach((element) => {
    sum += element;
});
let average = sum/arr.length;
return average;
}



console.log(average([5, 10, 30, 40]));


const fizzBuzz = function(countTo){
  let newArr = [];
  for(let i = 0; i <= countTo; i++){
    if(i%3===0 && i%5===0){
      newArr.push('fizzBuzz');
    } else if(i%3===0){
      newArr.push('fizz');
    } else if(i%5===0){
      newArr.push('buzz');
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(fizzBuzz(15));


const repeat = function(fn, n){
  for(let i=0; i < n; i++){
    fn();
  }
}

const hello = function(){
  console.log('Hello World');
}

const goodbye = function(){
  console.log('Goodbye World');
}

console.log(repeat(goodbye, 5));
console.log(repeat(hello, 5));

function filter(arr, fn) {
    // TASK: Define your function here
    let newArray = [];
    for(let item of arr){
      if(fn(item)===true){
        newArray.push(item);
      }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


console.log(filter(myNames, function(name){
  return name[0]==='R';
}));

console.log(filter(myNames, (name)=> {
  return name[0]==='R';
}));

console.log(filter(myNames, (name)=> name[0]==='R'));



//Functions as Return Values
const hazardWarningCreator = function(typeOfWarning) {
  let warningCounter = 0;
  return (location) => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  };
};

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Flood Warning');
const trafficWarning = hazardWarningCreator('Traffic Warning');

//rocksWarning(location)
rocksWarning('Main St and Pacific Ave');
rocksWarning('Job Street');

floodWarning('Downtown');
trafficWarning('All of the Bay Area');

/////////////////////////////////
/////////////////////////////////

const turtle = function(turtleSteps){
  let newArr = [];
  const noNegatives = turtleSteps.filter(values => values[0] > -1 && values[1] > -1);
  console.log(noNegatives);
  const sums = noNegatives.map(values => values[0] + values[1]);
  sums.forEach(value => console.log(`the turtle took ${value} steps`));
  return sums;
}
console.log(turtle([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]));
//create a decoded str
//if it is 3 characters in lenght add a space
//else capitalize the last element and add it
const lastProblem = function(sentence){
  const arr = sentence.split(" ");
  const reduction = arr.reduce((newStr, value)=>{
    if(value.length === 3){
      newStr+=' ';
    } else {
      const upperCase = value[value.length-1];
      newStr += upperCase.toUpperCase();
    }
    return newStr;
  }, '');
  return reduction;
}

console.log(lastProblem('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'));

// EXAMPLE WE USED
// const euro = [29.76, 41.85, 46.5];
// const above30 = euro.reduce((total, amount) => {
//   if (amount > 30) {
//     total.push(amount);
//   }
//   return total;
// }, []);
//
// above30 // [ 41.85, 46.5 ]
