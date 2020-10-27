/*
============================================
; Title:  Functions (Assignment 2.4)
; Author: Kevin Jones
; Date:   26 October 2020
; Description: Functions exercise
;===========================================
*/

// Node or CommonJS `require` function to read and execute the jones-header.js file
const header = require("../jones-header");

// header output
console.log(header.display("Kevin", "Jones", "Exercise 2.4"));

// define name function
function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// define date function
function dateWriter(year, month, day) {
  return month + "/" + day + "/" + year;
}

// define number formatter
function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

// define age and parse int function
function convertToInt(age) {
  return parseInt(age);
}

// define savings goal function
function convertToFloat(greenbacks) {
  return parseFloat(greenbacks);
}

// output
console.log("\n" + "Hello my name is " + fullName("Kevin", "Jones") + "!");

console.log(
  "\n" +
    "Today's date is " +
    dateWriter(2020, 10, 26) +
    " and the current temperature is " +
    formatNumber(33.599999, 1) +
    " degrees."
);

console.log(
  "\n" +
    "I am " +
    convertToInt("36") +
    " years old and my savings goal is " +
    convertToFloat("71254411255455") +
    " dollars."
);
