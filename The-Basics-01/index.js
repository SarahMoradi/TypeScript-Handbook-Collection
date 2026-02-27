// Static type-checking
var _message = "hello!";
// message();
// This expression is not callable.
// Type 'String' has no call signatures.
//#################################################
// Non-exception Failures
var _user = {
    name: "Daniel",
    age: 26,
};
// user.location;
// Property 'location' does not exist on type '{ name: string; age: number; }'.
//#################################################
// Explicit Types
function _greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
// greet("Brendan", new Date());
// greet("Brendan");
// Expected 2 arguments, but got 1.
