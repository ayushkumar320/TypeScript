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

// Aliases
type User = {
  readonly _id: string; // now no one can change the _id
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number; // optional property
}

function createNewUser(user: User): User{
  return {_id: "", name: "", email: "", isActive: true}
}

createNewUser({_id: "001", name: "", email: "", isActive: true})


type cardNumber = {
  cardNumber: string;
}

type cardDate = {
  cardDate: string;
}

type cvv = {
  cvv: string;
}

type cardDetails = cardNumber & cardDate & cvv; // merging types

function getCardDetails(card: cardDetails): cardDetails {
  return {cardNumber: "", cardDate: "", cvv: ""}
}

export {}