// context
function Greet() {
    console.log('Hello', this);
}
// Greet();


// Function’s context
// this in an object
let user = {
    name: "John",
    age: 30,
    sayHi: function () {
        // "this" is the "current object"
        console.log(this.name);
    }
};
// user.sayHi();


// Callbacks
function logThis(element) {
    console.log(element, this);
}
// [1, 2, 3].map(logThis, {name:'tom'});


// Arrow methods
// const foo = () => {
//     return this;
// };
var obj1 = {
    number: 123,
    logFunction: function () {
        console.log(this);
    },
    logArrow: () => {
        console.log(this);
    }
};
// obj1.logFunction(); // Object { number: 123}
// obj1.logArrow(); // Window


// Constrctors
function Person() {
    this.name = 'Tom';
    this.print = function () {
        console.log(this);
    }
}
var person = new Person();
person.print();