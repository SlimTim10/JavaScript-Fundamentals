/*
Use MDN as a reference throughout these exercises.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Practice creating arrays

/*
7.1 Create a variable to hold an array of numbers and print it.
*/


/*
7.11 Print an array of your top 3 favorite colors (as strings) without creating a variable.
*/


/*
7.12 Print an array of 4 different types of values.
*/


/*
7.13 Print a 2-dimensional array of numbers.
*/


// Practice using array index

/*
7.2 Print the fourth name (Dave) of the array.
*/
const names = ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank'];



/*
7.21 Print the last name of the array, without using the length property.
*/


/*
7.22 Print each of the names at even indexes of the array.
*/


/*
7.23 Create a function called 'head' that takes an array and returns its first element. What does it return when given an empty array?

Remember to write tests!
*/


/*
7.24 Create a function called 'isAtIndex' that takes a value, a number, and an array. It should return true if the value is found at the index number of the array, otherwise false.

The following lines should help test if your function works correctly. They should print true.
*/


// console.log('Bob is at index 1 in names:', isAtIndex('Bob', 1, names));
// console.log('Bob is not at index 0 in names:', !isAtIndex('Bob', 0, names));
// console.log('3 is at index 0 in these numbers:', isAtIndex(3, 0, [3, 2, 1]));
// console.log('2 is not at index 2 in these numbers:', !isAtIndex(2, 2, [3, 2, 1]));

/*
7.25 Create a function called 'area' that takes a rectangle and returns its area. The rectangle is represented by an array with 2 numbers: [length, width].

The following lines should help test if your function works correctly. They should print true.
*/


// console.log('area tests');
// console.log(area([1, 2]) === 2);
// console.log(area([2, 2]) === 4);
// console.log(area([6, 3]) === 18);
// console.log(area([0, 9]) === 0);

/*
7.251 Create a function called 'areaDifference' that takes two rectangles and returns the difference between the areas of the rectangles. Each rectangle is represented by an array with 2 numbers: [length, width].
*/


/*
7.252 Create a function called 'volumeDifference' that takes two cuboids and returns the difference between the volumes of the cuboids. Each cuboid is represented by an array with 3 numbers: [length, width, height]. The volume of a cuboid can be calculated by multiplying length x width x height.
*/


/*
7.26 Create a function called 'suitValue' that takes a card suit (string) and returns its number value. The suits and their values are as follows.

clubs: 0
diamonds: 1
hearts: 2
spades: 3
*/


/*
7.261 Create a function called 'highCard' that takes two cards and returns the higher card of the two. A card is represented by an array: [card value, card suit]. If two cards have different values, the card with the higher value is the higher card. If two cards have the same values, the card with the higher suit value is the higher card.

The card values are numbers: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 (Jack), 12 (Queen), 13 (King), 14 (Ace).
The card suits are strings: clubs, diamonds, hearts, spades.

For example, given the two cards [3, 'spades'] and [4, 'hearts'], the second one is the higher card. Given the two cards [11, 'spades'] and [11, 'hearts'], the first one is the higher card (because the Jack of Spades beats the Jack of Hearts).
*/


/*
7.27 Print the number 8 from the following 2D array.
*/
const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];



/*
7.271 Create a function called 'valueInMatrix' that takes 4 arguments: number, row, column, matrix. It should return true if the number is found at the specified row and column in the 2D array matrix, otherwise false. For example, the number 10 is found at row 3, column 2 in the previous matrix.
*/

// Practice using length

/*
7.3 Print the length of the names array.
*/


/*
7.31 Print the last name in the array, using the length property.
*/


/*
7.32 Print the sum of the lengths of the following arrays.
*/
const groceries = ['rice', 'bananas', 'avocados', 'blueberries', 'spinach', 'chickpeas', 'canned beans'];
const officeSupplies = ['pen', 'paper', 'tape', 'stapler'];



/*
7.33 Print the length of the first row in the following 2D array.
*/
const matrix2 = [
  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'],
  ['q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
];



/*
7.34 Create a function called 'last' that takes an array and returns its last element.
*/


/*
7.35 Print the length of the last row in the following 2D array.
*/
const bigMatrix = [[45,39,89,67,7,71,85,44,47,39],[89,32,81,19,43,17,47,10,6,58],[8,59,79,3,14,21,83,18,27,49],[24,32,72,3,22,32,5,69,15,61],[64,31,73,28,5,98,6,29,90,4],[54,6,92,92,56,84,81,7,53,62],[6,33,41,77,23,3,46,19,57,40],[3,79,65,30,79,54,25,53,35,71],[60,1,54,49,44,61,42,50,18,43],[91,46,7,50,95,14,45,4,98,22]];



/*
7.36 Create a function called 'isEmpty' that takes an array and returns true if it is empty, otherwise false.
*/


// Practice using the includes() method

/*
7.4 Create a function called 'goodColor' that takes a single color (string) and an array of good colors (strings). It should return true if the color is in the array, otherwise false.
*/


/*
7.41 Create a function called 'needToBuy' that takes a single item (string) and an array of owned items (strings). It should return true if the item isn't in the owned list (meaning we need to buy it!), otherwise false.
*/


/*
7.42 Create a function called 'hasNull' that takes an array and returns true if any of the values are null, otherwise false.
*/


/*
7.43 Create a function called 'badMatrix' that takes a 2D array with 3 rows. It should return true if any of the 3 rows contain a null value, otherwise false.
*/


/*
7.44 Create a function called 'goodMatrix' that takes a 2D array with 3 rows. It should return true if none of the 3 rows contain a null value, otherwise false.
*/


/*
7.45 Create a function called 'middleIndex' that takes an array and returns the index of the middle element, as per the following tests.

Tip: Look up the Math.floor() function.
*/


console.log('-- middleIndex tests');
console.log(middleIndex([1]) === 0);
console.log(middleIndex([1, 2]) === 1);
console.log(middleIndex([1, 2, 3]) === 1);
console.log(middleIndex([1, 2, 3, 4]) === 2);
console.log(middleIndex([1, 2, 3, 4, 5]) === 2);

/*
7.46 Create a function called 'middle' that takes an array and returns the middle element, as per the following tests.
*/


console.log('-- middle tests');
console.log(middle([1]) === 1);
console.log(middle([1, 2]) === 2);
console.log(middle([1, 2, 3]) === 2);
console.log(middle([1, 2, 3, 4]) === 3);
console.log(middle([1, 2, 3, 4, 5]) === 3);
console.log(middle([1, 2, 3, 4, 5, 6]) === 4);

// Practice using the slice() method

/*
7.5 Print the first 3 elements of the following array, using slice().
*/
const randomNumbers = [82, 31, 21, 59, 67, 2, 36, 86, 18];



/*
7.501 Print the middle 3 random numbers, using slice().
*/


/*
7.502 Print the last 3 random numbers, using slice().
*/


/*
7.51 Create a function called 'tail' that takes an array and returns the "tail" end of it; everything but the first element.

We can't use equality for comparing arrays, so it's tricky to write proper tests for functions like this, which return an array. For now, we can simply print the result and see if it looks right. The following lines should help you see if your function works correctly.
*/


console.log('-- tail tests');
console.log(tail([1, 2, 3]), '=== [2, 3]');
console.log(tail([1, 2]), '=== [2]');
console.log(tail([1]), '=== []');
console.log(tail([]), '=== []');

/*
7.511 Create a function called 'firstIsRepeated' that takes an array and returns true if the first element exists more than once in the array, otherwise false.
*/


/*
7.52 Create a function called 'init' that takes an array and returns all the elements except the last one.

The following lines should help you see if your function works correctly.
*/


console.log('-- init tests');
console.log(init([1, 2, 3, 4]), '=== [1, 2, 3]');
console.log(init([1, 2, 3]), '=== [1, 2]');
console.log(init([9]), '=== []');
console.log(init([]), '=== []');

/*
7.521 Create a function called 'lastIsRepeated' that takes an array and returns true if the last element exists more than once in the array, otherwise false.
*/


/*
7.522 Create a function called 'inner' that takes an array and returns all the elements except the first and last.
*/


/*
7.53 Create a function called 'take' that takes a number (n) and an array. It should return the first n elements of the array.

The following lines should help you see if your function works correctly.
*/


console.log('-- take tests');
console.log(take(3, [1, 2, 3, 4]), '=== [1, 2, 3]');
console.log(take(1, [1, 2, 3, 4]), '=== [1]');
console.log(take(0, [1, 2, 3, 4]), '=== []');
console.log(take(9, [1, 2, 3, 4]), '=== [1, 2, 3, 4]');

/*
7.54 Create a function called 'drop' that takes a number (n) and an array. It should drop the first n elements of the array and return the rest.

The following lines should help you see if your function works correctly.
*/


console.log('-- drop tests');
console.log(drop(0, [1, 2, 3, 4]), '=== [1, 2, 3, 4]');
console.log(drop(1, [1, 2, 3, 4]), '=== [2, 3, 4]');
console.log(drop(2, [1, 2, 3, 4]), '=== [3, 4]');
console.log(drop(3, [1, 2, 3, 4]), '=== [4]');
console.log(drop(4, [1, 2, 3, 4]), '=== []');
console.log(drop(9, [1, 2, 3, 4]), '=== []');

/*
7.55 Create a function called 'middle3' that takes an array (of at least 3 elements) and returns the middle 3 elements (as an array), as per the following tests.

The following lines should help you see if your function works correctly.
*/


console.log('-- middle3 tests');
console.log(middle3([1, 2, 3]), '=== [1, 2, 3]');
console.log(middle3([1, 2, 3, 4]), '=== [2, 3, 4]');
console.log(middle3([1, 2, 3, 4, 5]), '=== [2, 3, 4]');
console.log(middle3([1, 2, 3, 4, 5, 6]), '=== [3, 4, 5]');
console.log(middle3([1, 2, 3, 4, 5, 6, 7]), '=== [3, 4, 5]');

/*
7.551 Create a function called 'middleN' that takes a number (n) and an array (of at least n elements). It should return the middle n elements.

The following lines should help you see if your function works correctly.
*/


console.log('-- middleN tests');
console.log(middleN(3, [1, 2, 3, 4, 5]), '=== [2, 3, 4]');
console.log(middleN(1, [1, 2, 3, 4, 5]), '=== [3]');
console.log(middleN(1, [1, 2, 3, 4, 5, 6]), '=== [4]');

// Practice using the sort() method

/*
7.6 Create a function called 'bottom3' that takes an array (of at least 3 elements) and returns the bottom 3 elements in ascending order.

The following lines should help you see if your function works correctly.
*/


console.log('-- bottom3 tests');
console.log(bottom3([9, 2, 5, 4, 7, 6, 1, 3, 8]), '=== [1, 2, 3]');
console.log(bottom3([9, 2, 5, 1, 4, 1, 1, 3, 8]), '=== [1, 1, 1]');
console.log(bottom3([3, 2, 1]), '=== [1, 2, 3]');

/*
7.61 Create a function called 'bottomN' that takes a number (n) and an array (of at least n elements). It should return the bottom n elements in ascending order.
*/


// Practice using the reverse() method

/*
7.7 Create a function called 'top3' that takes an array (of at least 3 elements) and returns the top 3 elements in descending order.
*/


/*
7.71 Create a function called 'topN' that takes a number (n) and an array (of at least n elements). It should return the top n elements in descending order.
*/

// Practice adding elements to arrays

/*
7.8 Print the following array with the number 4 added to the end, so we get [1, 2, 3, 4].
*/
const oneTwoThree = [1, 2, 3];



/*
7.801 Print the following array with the number 1 added to the beginning, so we get [1, 2, 3, 4].
*/
const twoThreeFour = [2, 3, 4];



/*
7.802 Print the following array with the name 'Dave' added to the end, so we get ['Alice', 'Bob', 'Carol', 'Dave'].
*/
const someNames = ['Alice', 'Bob', 'Carol'];



/*
7.803 Print the following two arrays added together, so we get ['apple', 'banana', 'cherry', 'date', 'elderberry'].
*/
const fruits = ['apple', 'banana', 'cherry'];
const moreFruits = ['date', 'elderberry'];



/*
7.804 Print the following 2D array with another row added to the end.
*/
const matrix3 = [
  [1, 2, 3],
  [4, 5, 6]
];



/*
7.81 Create a function called 'nullHead' that takes an array and returns a new array with the first element replaced with null.

The following lines should help you see if your function works correctly.
*/


console.log('-- nullHead tests');
console.log(nullHead([1, 2, 3]), '=== [null, 2, 3]');
console.log(nullHead(['a', 'b', 'c']), '=== [null, b, c]');

/*
7.82 Create a function called 'append' that takes a value and an array, and returns a new array with the value added to the end.
*/


/*
7.821 Create a function called 'appendHead' that takes an array and returns a new array with its first value added to the end.
*/


/*
7.83 Create a function called 'swapEnds' that takes an array and returns a new array with the first and last elements swapped.

Tip: Try using our head(), last(), and inner() functions to help.
*/


/*
7.84 Create a function called 'countUp' that takes an array of numbers counting up and returns a new array with the next number added to the end.

The following lines should help you see if your function works correctly.

Tip: Try using our last() function to help.
*/


console.log('-- countUp tests');
console.log(countUp([1, 2, 3]), '=== [1, 2, 3, 4]');
console.log(countUp([25, 26, 27, 28, 29]), '=== [25, 26, 27, 28, 29, 30]');

/*
7.841 Create a function called 'countMore' that takes an array of numbers in a sequence (with a constant interval) and returns a new array with the next number in the sequence added to the end.

The following lines should help you see if your function works correctly.
*/


console.log('-- countMore tests');
console.log(countMore([1, 2, 3]), '=== [1, 2, 3, 4]');
console.log(countMore([2, 4, 6]), '=== [2, 4, 6, 8]');
console.log(countMore([1, 3, 5, 7]), '=== [1, 3, 5, 7, 9]');
console.log(countMore([10, 20, 30, 40, 50]), '=== [10, 20, 30, 40, 50, 60]');
console.log(countMore([-1, -2, -3]), '=== [-1, -2, -3, -4]');

/*
7.85 Create a function called 'insertAt' that takes an index, a value, and an array. It should return a new array with the given value inserted at the given index.

The following lines should help you see if your function works correctly.

Tip: Try using our take() and drop() functions to help.
*/


console.log('-- insertAt tests');
console.log(insertAt(3, 4, [1, 2, 3, 5]), '=== [1, 2, 3, 4, 5]');
console.log(insertAt(4, 5, [1, 2, 3, 4]), '=== [1, 2, 3, 4, 5]');
console.log(insertAt(2, 'c', ['a', 'b', 'd']), '=== [a, b, c, d]');

/*
7.86 Create a function called 'addToShoppingList' that takes a shopping list (array of strings) and an item (string). It should return a shopping list with the new item added to it. If the item is already in the shopping list, return the shopping list unchanged.
*/

