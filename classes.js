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
        return this.present() +", its a "+ this.model
    }
}

const mycar = new Model("mercedez benz", "Maybach");
//console.log(mycar.show());


//Arrow functions
//an anonymous function
() => {
    return "I love codding"
}

const greeting=(name)=> {
    return "hallo "+name
}
//console.log(greeting(" Aaron"))

//in a sinle line
const Greetings = name =>  "hallo " + name;
//console.log(Greetings(" Sala"));


//Array methods
//the map returns a new array

const docs = document.querySelector("#container");
const arr = ["oranges", "mangoes", "bananas", "apples"]

const list =''
    //console.log(lists)
docs.textContent = arr.map((lists) => {
        return lists;
    });
