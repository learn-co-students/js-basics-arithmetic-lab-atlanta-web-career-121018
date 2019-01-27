/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!


let newID = 1000000000 + oldID;
let ageIsValid = Number.isInteger(currentAge);
let randomNumber = Math.random() * 20; //random number >= 0 and less than 20.
let randomInteger = Math.floor(randomNumber);
let randomUserID = randomInteger + 1000000001;

// newID
//      converts IDs from the old style to the new style ‣
// ageIsValid
//      contains 'true' when the value in 'currentAge' is a valid integer ‣
//      invokes 'Number.isInteger()' ‣
// randomNumber
//      contains a random number greater than or equal to 0 and less than 20 ‣
//      invokes 'Math.random()' ‣
// randomInteger
//      contains the value of 'randomNumber' rounded down to the nearest integer ‣
// randomUserID
//      contains a random integer between 1000000001 and 1000000020
