// const superHeroes = [] by default it is of type never[], and hence we cannot push any value into it.

// To fix this, we can explicitly define the type of the array.

const superHeroes: string[] = []; 

// Now superHeroes is an array of strings

const heroPower: number[] = []

superHeroes.push("Spiderman")
heroPower.push(2)

// We can also define a type for objects in an array.
type User = {
  name: string
  isActive: boolean
}

const allUsers: User[] = [] // Now allUsers is an array of User objects

// We need to pass an object that matches the User type
allUsers.push({ name: "John", isActive: true }) 
allUsers.push({ name: "Jane", isActive: false })

// This is a 2D array of numbers 
const MLModels: number[][] = [
  [255,255,255],
  [0,0,0],
  [128,128,128]
] 