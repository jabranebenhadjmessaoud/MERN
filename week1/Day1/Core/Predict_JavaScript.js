//Problem 1
//----------------------------------
// Why did the code produce that output? If applicable, how would you get the index value that did not output?


const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)


// the output should be Tesla  Mercedes
// the actual output is Tesla Mercedes 
// the code produced that output because we declared a const named randomCar that contain the first item of the object cars
// and a const named otherRandomCar that contain the element after the first ',' in the object 
// we can get the index of the left element by using ',,'
//--------------------------------------------------------------------------------------------------

// Problem 2 
//Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?

const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);

console.log(employeeName);

// the output should be error 
// the actual output is error 
// this is how we can fix it console.log(employee.employeeName)
//---------------------------------------------------------------------------------------------------

// Problem 3 
// Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// the result should be error 
// the actual result is 12345 Undefined 

// The object destructuring tries to extract a 'password' property from 'person'
// Since no such property exists, 'hashedPassword' becomes undefined
// The original 'password' variable remains unchanged

//---------------------------------------------------------------------------------------
// Problem 4 
// Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);


// the output should be False True 
// the actual result is false true 
// the code produced that output because both console log are test of the value of first and its 2 
forth=numbers[3];
console.log(forth) ;

// ---------------------------------

// Problem 5 

// Why did the code produce that output? Console.log the last value in the secondKey property's array.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// the output should be {key: 'value', secondKey: [1, 5, 1, 8, 3, 3]} {key: 'value', secondKey: [1, 5, 1, 8, 3, 3]}  'value' secondKey: [1, 5, 1, 8, 3, 3]
// the actual result is:    value   [ 1, 5, 1, 8, 3, 3 ]   1    5
// const [ ,,LastValue] = secondKey;
//console.log(LastValue);

//-------------------------------------------------------------------------------------------------------

// Problem 6 
//First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
    var name = names[index];
    console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}
actuallyPrintingNames();
}
printNames(beatles);
// the output should be: Paul was found at index 0 // George was found at index 1 // John was found at index 2 // Ringo was found at index 3
// then   name and index after loop is   Undefined Undefined 
// the actual result is:  Paul was found at index 0 // George was found at index 1 // John was found at index 2 // Ringo was found at index 3
// then   name and index after loop is   Ringo:4 
//----------------------------------------------------------------------------------------------
//Problem 7 

//Why did the code produce that output?

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}  

//the code will give us nothing because we didn't invoke the function 
// the actual result is nothing 
//we didn't invoke the function 
//-----------------------------------------------------------------

// Problem 8 
//Why did the code produce that output? Explain the output, including any possible errors and why they occurred. If there are no errors, explain the justification for each keyword used to declare variables.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name + ' was found at index ' + index);
    }
}
actuallyPrintingNames();
}
printNames(beatles);
// the result should be Paul was found at index 0 // George was found at index 1 // John was found at index 2 // Ringo was found at index 3
// the actual result is Paul was found at index 0 // George was found at index 1 // John was found at index 2 // Ringo was found at index 3


//-----------------------------------------------------------------------------------------------------------------------------
// Problem 9 
//Why did the code produce that output? Explain why each console.log looks the way it does

const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

// the result should be true true 
// the actual result is true false 


// Spread operator creates a shallow copy
// Nested arrays still reference the same memory
// Top-level object is a new object, so comparison returns false
