# Promises

#### Introduction

If you ever did an async call to a server, you already worked with promises.

**A Promise is in one of these states:**

* pending: initial state, neither fulfilled nor rejected.
* fulfilled: meaning that the operation completed successfully.
* rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error).

**Methods**

* `Promise.all()`
* `Promise.race()`
* `Promise.resolve(value)`
* `Promise.reject(reason)`

**Prototype methods**

* `Promise.prototype.then(onFulfilled, onRejected)`
* `Promise.prototype.catch(onRejected)`

```js
const moviesPromise = fetch('https://rawgit.com/tamas-pap/playground-es6/master/src/data/movies.json');

moviesPromise
  .then(data => data.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Building your own Promises

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved. Cool!');
    //reject(Error('Promise rejected with an error. Not cool!'));
  }, 1000);
});

promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Waiting for multiple Promises

```js
const weather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 500);
});

const tweets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I love cakes. BBQ are good too!');
  }, 2000);
});

Promise.all([weather, tweets]).then(responses => {
  const [weatherInfo, tweetInfo] = responses;
  console.log(weatherInfo, tweetInfo);
});
```

#### Racing promises

```js
const weather = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ temp: 29, conditions: 'Sunny with Clouds' });
  }, 500);
});

const tweets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I love cakes. BBQ are good too!');
  }, 2000);
});

Promise.race([weather, tweets]).then(response => {
  console.log(response);
});
```

#### Exercises

1.  **Write a promise that loads the list of movies from https://rawgit.com/tamas-pap/playground-es6/master/src/data/movies.json, and returns the _limit_ top rated movie.**

```js
const toRatedMovies = limit => {...};

topRatedMovies(10).then(movies => {
  console.log(movies);
});
```

How to sort arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

How to slice an array: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
