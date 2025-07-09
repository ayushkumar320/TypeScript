function addTwo(num: number){
  // return num+2
  return "hello"  // We can also strict the return type of a function, here it is not so we can return anything here
}

// To fix the above problem, we can write like this

function addThree(num: number): number {
  // return "hello" Throws error
  return num + 3
}

function getUpper(val: string){
  return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

const loginUser = (name: string, email: string, isPaid: boolean = false) => {} 

getUpper("hello typescript")

let myValue = addTwo(5)
let anotherVal = addThree(3)

signUpUser("ayush", "ayush@example.com", true)

loginUser("h", "h@h.com") // false by default

function getValue(myVal: number) {
  if(myVal > 5){
    return true
  }
  return "200 OK"
}


export {}