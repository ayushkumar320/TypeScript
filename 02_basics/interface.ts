// Interface in TypeScript allows you to define the structure of an object.
// It can include properties, methods, and can be extended by other interfaces.
// Difference between interface and type:
// - Interface can be extended using 'extends' keyword.   
// - Type can be used to create unions and intersections.
// - Interface is generally used for object shapes, while type can be used for any type including primitives.

interface User {
  readonly dbId: number; // Readonly property, cannot be changed
  email: string,
  userId: number,
  googleId?: string,
  startTrail: () => string, // Method that returns a string
  // startTrail: () => void; // If we want to return nothing, we can
  // startTrail(): string; // This is a valid method declaration, but not commonly used
  getCoupon: (couponName: string, value: number) => number;
  // getCoupon(couponName: string, value: number): number; // Another way 

}

const hitesh: User = {
  dbId: 22,
  email: "hitesh@example.com",
  userId: 1,
  startTrail: () => {
    return "Trail started";
  },
  getCoupon: (name: string, off: number) => {
    return 10;
  }
}

hitesh.email = "h@hc.com"; // Allowed, as email is not readonly
// hitesh.dbId = 33; // Error: Cannot assign to 'dbId' because it is a read-only property

