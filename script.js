/* There are certain features or mechanisms which makes a Language Object-Oriented like: 
 

Object
Classes
Encapsulation
Inheritance
Let’s dive into the details of each one of them and see how they are implemented in JavaScript.
 

Object– An Object is a unique entity which contains property and methods. For example “car” is a real life Object, which have some characteristics like color, type, model, horsepower and performs certain action like drive. The characteristics of an Object are called as Property, in Object Oriented Programming and the actions are called methods. An Object is an instance of a class. Objects are everywhere in JavaScript almost every element is an Object whether it is a function,arrays and string. 
Note: A Method in javascript is a property of an object whose value is a function. 
Object can be created in two ways in JavaScript: 

1) an Object Literal */

// Defining object
let pet = {
    first_name: 'Trelvyn',
    last_name: 'Martin-Walley',

    //method
    getFunction: function() {
        return (`The name of this animal is
		${pet.first_name} ${pet.last_name}`)
    },
    //object within object
    streetAddress: {
        address: '555 Nice Place Dr',
        city: 'Syrupsport'
    }
}
console.log(pet.getFunction());
console.log(pet.streetAddress.address);

// Using Object Constructor

// Constructor
function animal(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// create a new instance of 'animal' objects
let animal1 = new animal('Trelvyn', 'Martin');
let animal2 = new animal('Isis', 'the WonderCat');

console.log(animal1.firstName);
console.log(`${animal2.firstName} ${animal2.lastName}`)


// Use OBJECT CREATE() Method

// object. create() example - simple object with properties:
const coder = {
        isStudying: false,
        printIntroduction: function() {
            console.log(`My name is ${this.name}. Am I 
          studying?: ${this.isStudying}.`)
        }
    }
    // Object.create() method
const me = Object.create(coder);

// "name" is property set on "me", but not on "coder"
me.name = "Ploppa";

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();


// 2. classes

// Defining class using es6
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return (`The name of the bike is ${this.name}.`)
    }
}
// Making object with the help of the constructor
let bike10 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike20 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike10.name); // Hayabusa
console.log(bike20.maker); // Kawasaki
console.log(bike10.getDetails());

// Traditional way to make CLASS

function Vehicle2(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
};

Vehicle2.prototype.getDetails = function() {
    console.log('The name of the bike is ' + this.name);
}

let bike1 = new Vehicle2('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle2('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());


/* Encapsulation -  The process of wrapping property and function within a single unit is known as encapsulation. 
Let’s understand encapsulation with an example. */


class person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    add_Address(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`Name is ${this.name}, Address is: ${this.add}`);
    }
}

let person1 = new person('Trelvyn', 005);
person1.add_Address('Syrupsport');
person1.getDetails();

/* In the above example we simply create an person Object using the constructor and Initialize it property and use it functions we are not bother about the implementation details.
 We are working with an Objects interface without considering the implementation details. Sometimes encapsulation refers to hiding of data or data Abstraction which means
  representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but their are no such 
  access modifiers in JavaScript but their are certain way by which we can restrict the scope of variable within the Class/Object. */

//Example:

// Abstraction example
function person2(fname, lname) {
    let firstname = fname;
    let lastname = lname;

    let getDetails_noaccess = function() {
        return (`First name is: ${firstname} Last
			name is: ${lastname}`);
    }

    this.getDetails_access = function() {
        return (`First name is: ${firstname}, Last
			name is: ${lastname}`);
    }
}
let person3 = new person2('DJ', 'MC DEEZ-Nutz');
console.log(person3.firstname);
console.log(person3.getDetails_noaccess);
console.log(person3.getDetails_access());

/* In the above example we try to access some property(person1.firstname) and functions(person1.getDetails_noaccess) but it returns undefine while their is a method
 which we can access from the person object(person1.getDetails_access()), by changing the way to define a function we can restrict its scope. */



/* Inheritance – It is a concept in which some property and methods of an Object is being used by another Object. Unlike most of the OOP languages where classes inherit classes,
 JavaScript Object inherits Object i.e. certain features (property and methods)of one object can be reused by other Objects. 
Lets’s understand inheritance with example: */

class cat {
    constructor(name) {
            this.name = name;
        }
        // method to return string
    toString() {
        return (`Name of cat is: ${this.name}`);
    }
}

class bombay extends cat {
    constructor(name, id) {
        //super keyword to for calling above class constructor
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()}, Student ID: ${this.id}`);
    }
}
let bombay1 = new bombay('Isis', 12);
console.log(bombay1.toString());

/* In the above example we define an Person Object with certain property and method and then we inherit the Person Object in the Student Object and use all the property and method of person Object as well define certain property and methods for Student. 
Note: The Person and Student object both have same method i.e toString(), this is called as Method Overriding. Method Overriding allows method in a child class to have the same name and method signature as that of a parent class. 
In the above code, super keyword is used to refer immediate parent class instance variable. */