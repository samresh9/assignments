/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = numbers[1];
    if(numbers.length == 0)return undefined;
    numbers.forEach(number => {
        if(number > largest){
            largest= number
        }
    });
   
    return largest;

}

module.exports = findLargestElement;
