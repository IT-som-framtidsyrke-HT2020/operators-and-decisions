
/*
// OPERATOR PRECEDENCE
// so how does javascript know that it need to calculate the results before it
// does the comparison? Lets continue from the example yesterday

const now = 2020;
const myAge = now - 1985;
const brothersAge = now - 1991;
console.log(now - 1991 > now - 1985);
// javascript knows that it needs to calculate the result of now - 1991 and now - 1985
// before iut compares both values. This happens because of operator precedence
// link to the MDN is in resources

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y); 
// the result is 10 10
// and this is because first javascript calculates 25 - 10 -5 becuase operator precedence
// and subtraction operates from left to right =>
// when that is done javascript executes the assignment operator and that is executed from right to left
// therefor y will be 25 and after that x will be the same as y
// if it was the other way around x woukld be undefined


//const averageAge = myAge + brothersAge / 2;
// in the above example javascript execution of operator precedence will cause problems
// it will first evaluate brothersAge times 2 and then add myAge to that value
// which is not what we want, we want the average age
const averageAge = (myAge + brothersAge) / 2;
// so we manually need to tell javascript what it should evaluate first by using () just like math
console.log(myAge, brothersAge, averageAge);


// STRINGS & TEMPLATE LITERALS
const firstName = "Helena";
const job = "developer";
const birthYear = 1985;
const now = 2020;
// declare some variables that actually describes me

const helena = "I'm "  + firstName + ", a " + (now - birthYear) + " years old " + job + "!";
console.log(helena);
// we declare a new variable that should contain the description of me
// printing it like this to the console takes a lot of time and looks messy 

// template literal
const newHelena = `I'm ${firstName}, a ${now - birthYear} years old ${job}`;
console.log(newHelena);
// therefor you should use template literals! It looks more clean and much easier to read

console.log("String with \n\
multiple \n\
lines");

// \n = symbol for new line in other languages but in javascript there is a bug
// so you need to add an extra \ at the end.

console.log(`String
with
multiple
lines`);
// but with backticks and es6 is so much easier!


// TAKING DECISIONS

// first of all here is a PRO TIP, and it doesnt matter if you are really good at coding
// or a beginner this is very useful anyway. I use this technique all the time

// before starting a task or exercise try to write down and define step by step
// what you need to do to complete the task. I usually do this by using comments in the code
// so before i start coding i do like this:

// Task: Check if a persons is old enough to take her/his drivers license.
// 1. First i need a variable for the persons age
// 2. Then i need a variable for the age required when taking your drivers license
// 3. After that i need to compare the age variable with the driversLicenseAge variable
// to see if the age variable is higher or equal to driversLicenseAge variable.
// 4. Last i need to make a decision based on the result

const age = 19;
const isOfAge = age >= 18;

if (isOfAge) {
    const test = "Test";
    console.log("YAY! You can take your drivers license!!!");
} else {
    console.log("Sorry come back in a few years!");
} 

//console.log(test);
// we cant access test here because it only lives inside the scope where its declared

const birthYearN = 1985;

let century;
 if (birthYearN <= 2000) {
     century = 20;
 } else {
     century = 21;
 }
 console.log(century);
// here we can access century because we declared it outside the scope


// TYPE COERSION & CONVERSION
// now we have to go back to data types, and types are one of the fundemental 
// aspects of programming.
// we need to understand this because javascript can sometimes act really wierd
// type conversion mean the process of converting a value from one type to another manually
// type coersion is the same as above but javascript does it automaticlly for us



// TYPE CONVERSION = manually converts

const inputYear = '1993';
console.log(typeof inputYear);

console.log(inputYear + 15);
// the output here is 199315 because javascript cant automatically 
// convert when we use concatinate

console.log(Number(inputYear) + 15);
// here we manually convert the string to a number

console.log(String(25));

// TYPE COERSION = automatiskt

console.log("I am " + 35 + " years old");

console.log('23' - '10' - 3); // COERSION
console.log('a' - '10' - 3);
console.log('23' + '10' + 3); // NO COERSION
// when using concatinate that is the ony time javascript can execute type coersion

console.log('23' > '18');
// type coersion happens here


let n = '1' + 1; // 11 
n = n -1; // 10
console.log(n);
// what will the output be?
// its 10
// first we have the string 1 and then add 1 to it
// and since javascript cant execute type coersion here the output is 11
// then n = 11 and 11 -1 = 10!


// THRUTHY & FALSY VALUES
// 5 falsy values: 0, '', undefined, NaN, null

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Helena'));
console.log(Boolean({}));


const money = 0;

if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! it's defined");
} else {
    console.log("height is undefined");
}
// 0 in this case can sometimes actually be a truthy value or we want it to be a valid value
// to be able to fix this in the above example we can use logical operators
// and we will learn that later on.
// but in this case the result will be false since 0 is a falsy value
*/

// EQUALITY OPERATORS 

const age = 18;
if (age === 18)console.log("You just became an adult!");
// '18' === 18 will not work. strict comparrison needs to compare the exact same data type

// 3 equal is strict and will never use type coersion
// 2 equal does actually do type coersion and is called loose comparison
// '18' == 18 so this will actually work
// but it is really a bad practice using loose equality operators. You should always use strict!
// loose can cause a lot of difficult problems and bugs in your code.
// it is actually a better practice to manually convefrt the type if you need to
// and then use the strict equality operator

const number = 25;
if (number !== 20)console.log("Hejhej");
// here we ask if number is NOT EQUAL to 20






