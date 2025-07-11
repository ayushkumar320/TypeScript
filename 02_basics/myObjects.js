"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "ayush",
    email: "ayush@lco.dev",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser() can not be used like this
createUser({ name: "ayush", isPaid: false });
var newUser = { name: "ayush", isPaid: false, email: "ayush@google.com" };
function createCourse() {
    return { name: "Ayush", price: 499 };
}
createUser(newUser);
function createNewUser(user) {
    return { _id: "", name: "", email: "", isActive: true };
}
createNewUser({ _id: "001", name: "", email: "", isActive: true });
