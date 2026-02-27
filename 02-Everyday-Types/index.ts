// Everyday Types


// ✅ The primitives:
const string: string = "Hi";
const number: number = 42;
const boolean: boolean = true;


//###################################################################################


// ✅ Arrays
const numbers: number[] = [1, 2, 3];
const strings: Array<string> = ["2", "4"];


//###################################################################################


// ✅ Functions
function greetAgain(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
greetAgain("sarah");


//###################################################################################


// ✅ Return Type Annotations: parameter type: number | return type: string
function getFavoriteNumber(number: number): string {
  return `Hello ${number}`;
}


//###################################################################################


// ✅ Functions Which Return Promises
async function getFavoriteNumberPromised(): Promise<number> {
  return 26;
}


//###################################################################################


// ✅ Anonymous Functions
const names = ["Alice", "Bob", "Eve"];

names.forEach(function (s) {
  console.log(s.toUpperCase());
});

names.forEach((s) => {
  console.log(s.toUpperCase());
});


//###################################################################################


// ✅ Object Types
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });


//###################################################################################


// ✅ Optional Properties
function printName(obj: { first: string; last?: string }) {
  // METHOD 1
  //   if (obj.last) {
  //     console.log(obj.last.toUpperCase());
  //   }
  // METHOD 2
  //   console.log(obj.last?.toUpperCase());
  // METHOD 3
  //   if (obj.last !== undefined) {
  //     console.log(obj.last.toUpperCase());
  //   }
  // METHOD 4
    if (obj.last != null) {
      console.log(obj.last.toUpperCase());
    }
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });


//###################################################################################


// ✅ Union Types - Part 1
type ID = number | string;

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}


//###################################################################################


// ✅ Union Types - Part 2
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log("Hello, " + x.join(" and "));
  } else {
    console.log("Welcome lone traveler " + x);
  }
}


//###################################################################################


// ✅ Type Aliases
type Point = {
  x: number;
  y: number;
};

function printCoordAliases(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoordAliases({ x: 100, y: 100 });


//###################################################################################


// ✅ Interfaces
interface IPoint {
  x: number;
  y: number;
}

function printCoordInterface(pt: IPoint) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });


//###################################################################################


// ✅ Type Assertions
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
const myCanvasT = <HTMLCanvasElement>document.getElementById("main_canvas");


//###################################################################################


// ✅ Literal Types - Part 1
function printText(s: string, alignment: "left" | "right" | "center") {
  console.log(s + " " + alignment);
}
printText("Hello, world", "left");


//###################################################################################


// ✅ Literal Types - Part 1
interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  console.log("value of x: ", x);
}
configure({ width: 100 });
configure("auto");


//###################################################################################


// ✅ Literal Inference
declare function handleRequest(url: string, method: "GET"): void;

const req = { url: "https://example.com", method: "GET" };
const reqAsConst = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method as "GET");
handleRequest(reqAsConst.url, reqAsConst.method);


//###################################################################################


// ✅ null and undefined - strictNullChecks (ON)
function doSomething(x: string | null) {
  // Non-null Assertion Operator (Postfix!)
  console.log(x!.concat("Hahaha"));

  //Check null while strictNullChecks is On
  if (x === null) {
    console.log("the value of x: ", x);
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}


//###################################################################################


// ✅ Less Common Primitives
const oneHundred: bigint = BigInt(100);
const secondName = Symbol("name");


//###################################################################################


// ✅ Any - Add noImplicitAny for type-checking
const any: any = { x: 0 };


//###################################################################################


// Type Annotations on Variables
// No type annotation needed -- 'myName' inferred as type 'string'
let myName: string = "Alice";
let typeAnnotation = "Alice";
