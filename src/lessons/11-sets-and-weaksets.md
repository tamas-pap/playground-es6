# Sets and WeakSets

#### Introduction

A set is like a unique array, where you can add the same item once, having a nice API.

```js
const people = new Set();

// Add items
people.add('John');
people.add('Peter');
people.add('Paul');
console.log(people.size);

// Remove items
people.delete('Peter');
console.log(people.size);

// Check if item exists
console.log(people.has('Paul'));

// Use it like a generator
const generator = people.values();
console.log(people.values());

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// Use it in a for..of loop
for (const person of people) {
  console.log(person);
}

// You can not add the same item twice
// Note how John appears only once
people.add('John');
for (const person of people) {
  console.log(person);
}
```

#### Brunch example

```js
const brunch = new Set();

// As people start coming in
brunch.add('Peter');
brunch.add('Sarah');
brunch.add('Simone');

// Readu to open
const line = brunch.values();
console.log(line.next().value);
console.log(line.next().value);

brunch.add('Josh');
brunch.add('Snickers');

console.log(line.next().value);
console.log(line.next().value);
console.log(line.next().value);
```

#### Working with WeakSets

```js
var dogs = new WeakSet();
var snickers = { name: 'Snickers', breed: 'King Charles' };
var sunny = { name: 'Sunny', breed: 'German Shepherd' };

//dogs.add('Hugo'); // Fails. Only objects can be added to weak sets

dogs.add(snickers);
dogs.add(sunny);

console.log(dogs.has(snickers)); // true
snickers = null;
console.log(dogs.has(snickers)); // false, since it was automatically removed from the WeakSet
```
