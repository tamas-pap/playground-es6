# Classes

#### Classes in ES5

```js
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function() {
  console.log(`Bark Bark! My name is ${this.name}`);
};

Dog.info = function() {
  console.log('A dog is better than a cat.');
};

const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'German Shepherd');

snickers.bark(); // both instances share the bark method
sunny.bark();

Dog.info();

console.log(snickers); // note that the bark method is not there, however we can call it, because it is on the shared prototype
console.log(snickers.constructor); // Dog
```

#### Classes in ES6

```js
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`Bark Bark! My name is ${this.name}`);
  }

  static info() {
    console.log('A dog is better than a cat.');
  }

  get description() {
    // this is a getter
    return `${this.name} is a ${this.breed} type of dog.`;
  }

  set nicknames(value) {
    this.nick = value.trim();
  }

  get nicknames() {
    return this.nick.toUpperCase();
  }
}

const snickers = new Dog('Snickers', 'King Charles');
const sunny = new Dog('Sunny', 'German Shepherd');

snickers.bark();
sunny.bark();

console.log(snickers);
console.log(snickers.constructor); // Dog

Dog.info();

console.log(snickers.description);

snickers.nicknames = ' snicky ';
console.log(snickers.nicknames);
```

#### Extending classes with super()

```js
class Animal {
  constructor(name) {
    this.name = name;
    this.thirst = 100;
    this.belly = [];
  }

  drink() {
    this.thirst -= 10;
    return this.thirst;
  }

  eat(food) {
    this.belly.push(food);
    return this.belly;
  }
}

const rhino = new Animal('Rhiney');

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log(`Bark Bark! My name is ${this.name}`);
  }
}

const snickers = new Dog('Snickers', 'King Charles');
console.log(snickers);

snickers.bark();
```

#### Exercises

1.  **Implement a MovieCollection class, extending Array with the following methods: constructor, add - adds a new movie, remove - removes a movie, topRated(limit) - returns the first limit top rated movies**

```js
class MovieCollection extends Array {}

const movies = new MovieCollection(
  'Toms Favorite Movies',
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
);
```

```js
class MovieCollection extends Array {
  constructor(...items) {
    super(...items);
  }

  add(movie) {
    this.push(movie);
  }

  remove(movie) {
    let index = this.indexOf(movie);
    this.splice(index, 1);
  }

  topRated(limit = 10) {
    return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
  }
}

const movies = new MovieCollection(
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
);

var titanic = { title: 'Titanic', year: 1997, length: 170, stars: 10 };

movies.add(titanic);
console.table(movies);

movies.remove(titanic);
console.table(movies);

const topRated = movies.topRated();
console.table(topRated);
```
