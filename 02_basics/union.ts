// Union is a type that can be one of several types.

let score: number | string = 33;
// Here, score can be either a number or a string

score = 44;

score = "44";

// score = true; // This will cause a TypeScript error because boolean is not part of the union type

type User = {
  name: string;
  id: number;
}

type Admin = {
  username: string;
  id: number;
}

let ayush: User | Admin = {
  name: "Ayush",
  id: 334
}

ayush = {
  username: "ayushnotkumar",
  id: 334
}
// Here, ayush can be either a User or an Admin

function getDbId(id: number | string) {
  // id.toLowerCase(); // This will cause a TypeScript error because number does not have toLowerCase method

  // To fix this, we can use a type guard
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id++; // Now TypeScript knows id is a number
  } 
}


// Array

const data: number[] = [1, 2, 3, 4, 5];
const data2: string[] = ["1", "2", "3", "4", "5"];
const data3: (number | string)[] = [1, "2", 3, "4", 5]; // number | string array should be in parentheses ()

const data4: Array<number | string> = [1, "2", 3, "4", 5]; // Another way to define an array with union types

let pi: 3.14 = 3.14; // Literal type, pi can only be 3.14

let seatAllotment: "aisle" | "middle" | "window"; // Literal type, seatAllotment can only be "aisle", "middle", or "window"

seatAllotment = "aisle"; // Valid assignment
seatAllotment = "middle"; // Valid assignment
// seatAllotment = "front"; // This will cause a TypeScript error because "front" is not part of the union type


