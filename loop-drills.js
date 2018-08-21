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
