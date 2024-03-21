//classes

class Car {
  constructor(name) {
    this.brand = name;
  }
  present() {
    return "I have a brand new car " + this.brand;
  }
}

//class inheritance
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ", its a " + this.model;
  }
}

const mycar = new Model("mercedez benz", "Maybach");
//console.log(mycar.show());

//Arrow functions
//an anonymous function
() => {
  return "I love codding";
};

const greeting = (name) => {
  return "hallo " + name;
};
//console.log(greeting(" Aaron"))

//in a sinle line
const Greetings = (name) => "hallo " + name;
//console.log(Greetings(" Sala"));

//Array methods
//the map returns a new array

const docs = document.querySelector("#container");
const arr = ["oranges", "mangoes", "bananas", "apples"];

const list = "";
//console.log(lists)
docs.textContent = arr.map((lists) => {
  return lists;
});

//destructuring
const vehicle = ["mustung", "actros", "landcruiser"];

//const [sedan, truck, suv] = vehicle;
const[sedan, , suv] = vehicle

//console.log(sedan);
// funtion returning an array
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b
    const devision = a / b
    return [add, subtract, multiply, devision]
}
const [add, subtract, multiply, devision] = calculate(20, 10)
//console.log("addition:" + add, "subtraction : " + subtract, "multiplicaton: " + multiply, "division:" + devision)


//destructuring objects

const vehicles = {
    brand: "ford",
    model: "mustang",
    type: "car",
    year: 2023,
    color: "red",
}
myVehicle(vehicles)
function myVehicle({ brand, model, type, year, color }) {

console.log(brand);
}

// the spread operator

const fruit1 = ["mangoes", "bananas", "oranges"];
const fruits2 = ["apples", "pineapples", "avocados"]

const fullSalad = [...fruit1, ...fruits2]
//console.log(fullSalad)

const [melons, mangoes, ...rest] = fullSalad

console.log(melons);
console.log(mangoes);
console.log(rest);

//modules
// worked on the file learn.js and message.js


//ternary operator
const number = 14;

if (number > 20) {
    console.log("number greater than 20")
}
else {
    console.log("number less than 20");

}
number < 20
  ? console.log("number greater than 20")
  : console.log("number less than 20");

//number ?number>20 :"very small"



