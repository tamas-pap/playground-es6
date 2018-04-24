# Generators

#### Introduction

We can create functions that we can start and stop.

```js
function* listDogs() {
  yield 'Snickers';
  yield 'Sunny';
  yield 'Caesar';
}

const dogs = listDogs();
console.log(dogs);

let dog = dogs.next();
console.log(dog);

dog = dogs.next();
console.log(dog);

dog = dogs.next();
console.log(dog);

dog = dogs.next();
console.log(dog);
```

#### Using yield in for loops

```js
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879 },
  { first: 'Isaac', last: 'Newton', year: 1643 },
  { first: 'Galileo', last: 'Galilei', year: 1564 },
  { first: 'Marie', last: 'Curie', year: 1867 },
  { first: 'Johannes', last: 'Kepler', year: 1571 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
  { first: 'Max', last: 'Plank', year: 1858 },
];

function* loop(arr) {
  for (const item of arr) {
    yield item;
  }
}

const inventorGen = loop(inventors);

let inventor = inventorGen.next();
console.log(inventor);

inventor = inventorGen.next();
console.log(inventor);

inventor = inventorGen.next();
console.log(inventor);
```

#### An infinite generator

```js
function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

#### Making asynchronous code "synchronous" with generators

```js
function request(url) {
  fetch(url)
    .then(data => data.json())
    .then(data => {
      repos.next(data);
    });
}

function* getRepos() {
  var githubRepos = yield request('https://api.github.com/users/github/repos');
  console.log('Github repos', githubRepos.map(repo => repo.name));

  var googleRepos = yield request('https://api.github.com/users/google/repos');
  console.log('Google repos', googleRepos.map(repo => repo.name));
}

var repos = getRepos();
repos.next();
```
