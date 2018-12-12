//Data Types:
//Number, String, Array, Object

// Naming variables:
//letters, numbers, underscores, dollar signs
//begin with a letters
// _ $
// Case sensitive

//Arrays:
//var numbers = [0,1,2,'three','4'];
//alert(numbers.sort());

//Loops:
//while loops
//for loops

//Conditionals
// = assigning, == comparing, === comparing and same data type.
// != not equal, && both condition must be met, || one or the other condition must be met
//if else statements
//switch

//Object Literal
/*
var person = {
    firstName: 'Kary',
    lastName: 'Ma',
    age: 46,
    children: ['Brianna','Nicholas'].
    address: {
        street: '555 Something St',
        city: 'Boston',
        state: 'MA'
    },
    fullName: function(){
      return this.firstName + " " + lastName;
  }
}

console.log(person.firstName);
console.log(person.address.state);
console.log(person.fullName());
*/

//Object Constructor
/*
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
  return 'An apple is the color ' + this.color + ' and is the shape ' + this.shape;
}
*/

//Constructor Pattern
/*
function Fruit(name1, color1, shape1) {
  this.name = name1;
  this.color = color1;
  this.shape = shape1;
  this.describe = function() {
    return 'A ' + this.name + ' is the color ' + this.color + ' is the shape ' +
    this.shape;
  }
}

var apple = new Fruit('apple', 'red', 'round');
var banana = new Fruit('banana', 'yellow', 'curved');

console.log(apple);
console.log(banana.shape);
console.log(apple.describe());
*/

// Array Objects
/*
var user = [
  {
    name: 'John Doe',
    age: 30,
  },
  {
    name: 'Mark Smith',
    age: 44,
  },
  {
    name: 'Shelly Williams',
    age: 20,
  },
];

console.log(user[0].name);
*/
