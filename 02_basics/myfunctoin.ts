function addTwo(num: number){
  // return num+2
  return "hello"  // We can also strict the return type of a function, here it is not so we can return anything here
}

function getUpper(val: string){
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

const loginUser = (name: string, email: string, isPaid: boolean = false) => {} 

getUpper("hello typescript")

let myValue = addTwo(5)

signUpUser("ayush", "ayush@example.com", true)

loginUser("h", "h@h.com") // false by default

export {}