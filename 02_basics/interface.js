// Interface in TypeScript allows you to define the structure of an object.
// It can include properties, methods, and can be extended by other interfaces.
// Difference between interface and type:
// - Interface can be extended using 'extends' keyword.   
// - Type can be used to create unions and intersections.
// - Interface is generally used for object shapes, while type can be used for any type including primitives.
var hitesh = {
    dbId: 22,
    email: "hitesh@example.com",
    userId: 1,
    startTrail: function () {
        return "Trail started";
    },
    getCoupon: function (name, off) {
        if (name === void 0) { name = "ayush"; }
        if (off === void 0) { off = 10; }
        return 10;
    }
};
hitesh.email = "h@hc.com"; // Allowed, as email is not readonly
// hitesh.dbId = 33; // Error: Cannot assign to 'dbId' because it is a read-only property

hitesh.getCoupon(); // Calling the method with default parameters
hitesh.getCoupon("summer", 20); // Calling the method with custom parameters        