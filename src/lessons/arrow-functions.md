# Arrow functions

#### Introduction

```js
var materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

materials.map(function(material) {
  return material.length;
}); // [8, 6, 7, 9]

materials.map(material => {
  return material.length;
}); // [8, 6, 7, 9]

materials.map(material => material.length); // [8, 6, 7, 9]
```

#### Arrow functions and `this`

```js
function Person() {
  // The Person() constructor defines `this` as an instance of itself.
  this.age = 0;

  setInterval(function growUp() {
    // The growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

const person = new Person();
```

> Rewrite the above example with `bind` and arrow functions.

#### Arrow functions as methods

```js
'use strict';
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  },
};
obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
```

#### Use of the new operator

```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```

#### Use of the prototype property

```js
var Foo = () => {};
console.log(Foo.prototype); // undefined
```

#### Default arguments

```js
function calculateBill(amount, tax, tip) {
  return amount + amount * tax + amount * tip;
}

const totalBill = calculateBill(100, 0.2, 0.1);

function calculateBill(amount, tax, tip) {
  tax = tax || 0.2;
  tip = tip || 0.1;
  return amount + amount * tax + amount * tip;
}

const totalBill = calculateBill(100);

function calculateBill(amount, tax = 0.2, tip = 0.1) {
  return amount + amount * tax + amount * tip;
}

const totalBill = calculateBill(100);
```

> **Benefits of arrow functions**
>
> * Much more concise than regular functions
> * Implicit returns
> * Does not rebind the value of this

#### Exercises

* Use `map`, `filter` and `reduce` functions to return the total length of movies created after 2000, using the following array:

```js
const movies = [
  { title: 'The Godfather', year: 1972, length: 180, stars: 9 },
  { title: 'Pulp Fiction', year: 1994, length: 165, stars: 8 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2003, length: 190, stars: 10 },
  { title: 'Inception', year: 2004, length: 175, stars: 10 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002, length: 187, stars: 9 },
  { title: 'The Matrix', year: 1999, length: 188, stars: 9 },
  { title: 'The Usual Suspects', year: 1995, length: 160, stars: 7 },
  { title: 'Léon: The Professional', year: 1994, length: 165, stars: 9 },
  { title: 'Saving Private Ryan', year: 1998, length: 173, stars: 8 },
  { title: 'Interstellar', year: 2014, length: 195, stars: 9 },
];
```
