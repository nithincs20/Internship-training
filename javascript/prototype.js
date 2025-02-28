// Using constructor methods
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
};

var person1 = new Person('Tom', 25);
// person1.sayHello();

// Prototype is live
Person.prototype.sayHi = function () {
    console.log(`Hii`);
};
person1.sayHi()


// dunder proto
// __proto__
// console.log(person1.__proto__);
var cat = {
    walks: true,
    // __proto__: Animal
}


// Prototype Inheritance
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} say hi.`);
};

function Dog(name) {
    this.name = name
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Beagle');
// dog.speak();