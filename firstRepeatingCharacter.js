/**
 * Given a string str, create a function that returns the first repeating character.
 * If such character doesn't exist, return null
 * */

/**
 * Time complexity
 * O(n^2)
 */
const firstRepeatCharacter1 = (str) => {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < i; j++) {
        if (str[i] === str[j]) {
          return str[i];
        }
      }
    }
    return null;
  };
  
  console.log(firstRepeatCharacter1("inside"));
  console.log(firstRepeatCharacter1("programming"));
  console.log(firstRepeatCharacter1("abcd"));
  console.log(firstRepeatCharacter1("abba"));

/**
 * Time complexity
 * O(n)
 */

const firstRepeatCharacter = (str) => {
  const count = new Map();
  for (let i = 0; i < str.length; i++) {
    const value = str[i];
    if (count.get(value)) {
      return value;
    } else {
      count.set(value, true);
    }
  }
  return null;
};

console.log(firstRepeatCharacter("inside"));
console.log(firstRepeatCharacter("programming"));
console.log(firstRepeatCharacter("abcd"));
console.log(firstRepeatCharacter("abba"));
