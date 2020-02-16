/*
Stack class
Stack is a list where elements are only accessed from the top
It implements LAST IN FIRST OUT (LIFO)
Use:
    push - to add elements to a stack
    pop - to access and remove the top element in the stack
    peek - to access or view the top element in the stack
    clear - to remove all elements in a stack
    length - to get the number of elements in a stack
*/
class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(element) {
        this.dataStore[this.top++] = element;
    }

    peek() {
        return this.dataStore[this.top - 1];
    }

    pop() {
        return this.dataStore[--this.top];
    }

    clear() {
        this.top = 0;
    }

    length() {
        return this.top;
    }
}


let s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());

// This function checks if a string is s palindrome -  number read same forwards and backwards eg mum
function isPalindrome(word) {

    let s = new Stack();

    for (let i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }

    let reverseword = "";
    while (s.length() > 0) {
        reverseword += s.pop();
    }

    if (word == reverseword) {
        return true;
    } else {
        return false;
    }

}

let word = "hello";
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}

word = "racecar"
if (isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}

// Example in implementing recursive functions - getting the factorial of a number
function factorial(n) {

    let s = new Stack();

    while (n > 1) {
        s.push(n--);
    }

    let product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }

    return product;
    ``
}

console.log(factorial(5));