# Arrow functions

#### Introduction

```js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
```

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

    function Person() {
      // The Person() constructor defines `this` as an instance of itself.
      this.age = 0;

      setInterval(function growUp() {
        // In non-strict mode, the growUp() function defines `this`
        // as the global object, which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
      }, 1000);
    }

    var p = new Person();

---

    function Person() {
      var that = this;
      that.age = 0;

      setInterval(function growUp() {
        // The callback refers to the `that` variable of which
        // the value is the expected object.
        that.age++;
      }, 1000);
    }

    var p = new Person();

---

    function Person() {
      var that = this;
      that.age = 0;

      setInterval(function growUp() {
        // The callback refers to the `that` variable of which
        // the value is the expected object.
        that.age++;
      }, 1000);
    }

    var p = new Person();

#### Arrow functions as methods

    'use strict';
    var obj = {
      i: 10,
      b: () => console.log(this.i, this),
      c: function() {
        console.log(this.i, this);
      }
    }
    obj.b(); // prints undefined, Window {...} (or the global object)
    obj.c(); // prints 10, Object {...}

#### Use of the new operator

    var Foo = () => {};
    var foo = new Foo(); // TypeError: Foo is not a constructor

#### Use of the prototype property

    var Foo = () => {};
    console.log(Foo.prototype); // undefined

#### Default arguments

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


    function calculateBill(amount, tax=0.2, tip=0.1) {
      return amount + amount * tax + amount * tip;
    }

    const totalBill = calculateBill(100);

#### Exercises

* Use `map`, `filter` and `reduce` functions to return the total length of movies created after 2000, using the following array:

      	    const movies = [
      	      {title: 'The Godfather', year: 1972, length: 180, stars: 9},
      	      {title: 'Pulp Fiction', year: 1994, length: 165, stars: 8},
      	      {title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2003, length: 190, stars: 10},
      	      {title: 'Inception', year: 2004, length: 175, stars: 10},
      	      {title: 'The Lord of the Rings: The Two Towers', year: 2002, length: 187, stars: 9},
      	      {title: 'The Matrix', year: 1999, length: 188, stars: 9},
      	      {title: 'The Usual Suspects', year: 1995, length: 160, stars: 7},
      	      {title: 'Léon: The Professional', year: 1994, length: 165, stars: 9},
      	      {title: 'Saving Private Ryan', year: 1998, length: 173, stars: 8},
      	      {title: 'Interstellar', year: 2014, length: 195, stars: 9}
      	    ];

#### Benefits

* Much more concise than regular functions
* Implicit returns
* Does not rebind the value of this

#### Advices

* Do not use arrow functions as methods
