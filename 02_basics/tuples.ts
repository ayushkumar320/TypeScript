const user: string[] = ['John', 'Doe', 'Smith']; // If we want to use a tuple, we can define it like this
const userTuple: [string, string, string] = ['John', 'Doe', 'Smith']; // Tuple type, userTuple must have exactly 3 string elements

// We can also use tuples with different types
const userWithAge: [string, number] = ['John', 30]; // Tuple type, userWithAge must have a string and a number

const gameCriteria: [string, number, boolean] = ["Username", 19, true];


// Tuples can also be used with union types
const userWithUnion: [string, (number | string)] = ['John', 30]; // Tuple type, userWithUnion must have a string and either a number or a string 30 can be a string or a number 


// Optional properties in tuples
const userWithOptional: [string, number?, boolean?] = ['John', 30]; // Tuple type, userWithOptional must have a string and an optional number and boolean

const bankDetails: [string, number?, boolean?] = ["SBI"] // Tuple type, bankDetails must have a string and optional number and boolean

type UserTuple = [string, number, boolean]; // Defining a tuple type

const newUser: UserTuple = ["ayush@google.com", 19, true];

newUser[1] = 20; // Valid assignment, newUser[1] is a number

newUser.push("new element"); // This will not cause a TypeScript error because tuples can be extended with push method


export {}