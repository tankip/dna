/**
 * Given an array of integers arr and integer k
 * create a boolean function that checks if there exists two elements in arr
 * such that we get k when we add them together
 */

/**
 * Time complexity
 * O(n^2)
 */
const findPair = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
};

let arr = [4, 5, 1, -3, 6];
console.log(findPair(arr, 8)); // false
console.log(findPair(arr, 11)); // true

/**
 * Time complexity
 * O(nlogn)
 */
const findPair2 = (arr, k) => {
  arr = arr.sort((a, b) => a - b);
  let first = 0;
  let last = arr.length - 1;
  while (arr[first] < arr[last]) {
    if (arr[first] + arr[last] === k) {
      return true;
    } else if (arr[first] + arr[last] < k) {
      first++;
    } else {
      last--;
    }
  }
  return false;
};

console.log(findPair2(arr, 8)); // false
console.log(findPair2(arr, 11)); // true


/**
 * Time complexity
 * O(n)
 */
const findPair3 = (arr, k) => {
  let visited = new Map();
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (visited.get(k - value)) {
      return true;
    } else {
      visited.set(value, true);
    }
  }
  return false;
};
console.log(findPair3(arr, 8)); // false
console.log(findPair3(arr, 11)); // true
