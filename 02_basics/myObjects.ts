const User = {
  name: "ayush",
  email: "ayush@lco.dev",
  isActive: true
}

function createUser ({name: string, isPaid: boolean}) {}


// createUser() can not be used like this
createUser({name: "ayush", isPaid: false})

let newUser = {name: "ayush", isPaid: false, email: "ayush@google.com"}

function createCourse(): {name: string, price:number} {
  return {name: "Ayush", price: 499}
} 

createUser(newUser)

export {}