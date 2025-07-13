// Enums in TypeScript
// Why we need Enums?
// Enums are a way to define a set of named constants. They can be used to represent a collection of related values, making the code more readable and maintainable. Or to restrict user's choice.

// Normal way to define constants, but we can use Enums for better readability

const AISLE = 0
const MIDDLE = 1
const WINDOW = 2

// This is not very readable, especially when we have many constants. Instead, we can use Enums.

enum Seat {
  Aisle,  // Aisle seat
  Middle, // Middle seat
  Window  // Window seat
}

// With default values, the first member is assigned 0, the second 1, and so on.

// We can also assign specific values to the members of the enum.

enum SeatWithValues {
  Aisle = 1,  // Aisle seat
  Middle = 2, // Middle seat
  Window = 3  // Window seat
}



// We can also use strings as values in Enums, which can be more descriptive.

enum SeatType {
  Aisle = "aisle",
  Middle = "middle",
  Window = "window"
}

// We can also have string as well as numeric enums in the same file, but it's not recommended to mix them in the same enum.

enum MixedSeat {
  Aisle = "aisle",
  Middle = 2,
  Window, // This will be 3, as it continues from the last numeric value
}

const assignedSeat = SeatType.Window // It restricts with the values we can assign to assignedSeat

