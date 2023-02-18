let str1 = "hello";
let str2 = "world";
let str3 = "HELLO";
let num1 = 10;
let num2 = 5;
let bool1 = true;
let bool2 = false;
let arr = [1, 2, 3, 4, 5];

// Equality and inequality tests with strings
console.log("Is str1 == 'hello'? I predict true.");
console.log(str1 == 'hello');

console.log("Is str1 != str2? I predict true.");
console.log(str1 != str2);

console.log("Is str1 == str3? I predict false.");
console.log(str1 == str3);

// Lowercase tests
console.log("Is str1.toLowerCase() == 'hello'? I predict true.");
console.log(str1.toLowerCase() == 'hello');

console.log("Is str3.toLowerCase() == 'hello'? I predict true.");
console.log(str3.toLowerCase() == 'hello');

// Numerical tests
console.log("Is num1 == 10? I predict true.");
console.log(num1 == 10);

console.log("Is num1 != num2? I predict true.");
console.log(num1 != num2);

console.log("Is num1 > num2? I predict true.");
console.log(num1 > num2);

console.log("Is num2 < num1? I predict true.");
console.log(num2 < num1);

console.log("Is num1 >= 10? I predict true.");
console.log(num1 >= 10);

console.log("Is num2 <= 5? I predict true.");
console.log(num2 <= 5);

// Tests using "and" and "or" operators
console.log("Is bool1 and bool2 both true? I predict false.");
console.log(bool1 && bool2);

console.log("Is bool1 or bool2 true? I predict true.");
console.log(bool1 || bool2);

// Test whether an item is in an array
console.log("Is 3 in arr? I predict true.");
console.log(arr.includes(3));

// Test whether an item is not in an array
console.log("Is 6 not in arr? I predict true.");
console.log(!arr.includes(6));
