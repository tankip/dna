/**
 * 
Given an array of integers arr, create a function that returns an array containing the values of arr without duplicates (the order doesn't matter).
 */

const removeDuplicates1 = (arr) => {
  if (arr.length < 0) return [];
  const nodups = [];
  for (let i = 0; i < arr.length; i++) {
    if (!nodups.includes(arr[i])) {
      nodups.push(arr[i]);
    }
  }
  return nodups;
};

const removeDuplicates2 = (arr) => {
  if (arr.length < 0) return [];
  arr.sort((a, b) => a - b);
  const nodups = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      nodups.push(arr[i]);
    }
  }
  return nodups;
};

const removeDuplicates3 = (arr) => {
  if (arr.length < 0) return [];
  const count = new Map();
  for (let i = 0; i < arr.length; i++) {
    count.set(arr[i], true);
  }
  return Array.from(count.keys());
};

const removeDuplicates = (arr) => {
  return Array.from(new Set(arr));
};

console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 3, 1])); // [ 1, 2, 3 ]
console.log(removeDuplicates1([1, 1, 1, 1, 2, 2, 2, 3, 1])); // [ 1, 2, 3 ]
console.log(removeDuplicates2([1, 1, 1, 1, 2, 2, 2, 3, 1])); // [ 1, 2, 3 ]
console.log(removeDuplicates3([1, 1, 1, 1, 2, 2, 2, 3, 1])); // [ 1, 2, 3 ]
