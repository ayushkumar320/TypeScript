"use strict";
// let variableName: type = value
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Ayush!";
// greetings = 6 Throws an error
// greetings = true also thrwos an error
var myNum = 6;
// myNum.toUpperCase() error
greetings.toLowerCase();
console.log(greetings);
// Number: There is no suuch categorization of nteger or float, everything is number
var userId = 334455;
// We can also write like this
// let userId = 223344
// Here typescript automatically detects it as "Number" and yes there is a difference as TS will only show us the methods corresponding to userId which are made for Numbers, whereas in JS it shows all the methods even arrays and objects ones. This is called type inference
// Boolean
var isLoggedIn = false;
