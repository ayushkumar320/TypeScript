"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num+2
    return "hello"; // We can also strict the return type of a function, here it is not so we can return anything here
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
getUpper("hello typescript");
var myValue = addTwo(5);
signUpUser("ayush", "ayush@example.com", true);
loginUser("h", "h@h.com"); // false by default
