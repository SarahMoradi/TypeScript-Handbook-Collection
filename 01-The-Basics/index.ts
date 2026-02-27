// Static type-checking

const message = "hello!";
// message();
// This expression is not callable.
// Type 'String' has no call signatures.

//#################################################

// Non-exception Failures
const user = {
  name: "Daniel",
  age: 26,
};
// user.location;
// Property 'location' does not exist on type '{ name: string; age: number; }'.

//#################################################

// Explicit Types
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// greet("Brendan", new Date());
// greet("Brendan");
// Expected 2 arguments, but got 1.

// noImplicitAny
// strictNullChecks
