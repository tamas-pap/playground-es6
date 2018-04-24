# Async and Await

#### Short recap on using promises

```js
function breathe(time) {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      reject('Time is too short to breathe.');
      return;
    }

    setTimeout(() => {
      resolve(`Breathed for ${time} milliseconds.`);
    }, time);
  });
}

breathe(500)
  .then(result => {
    console.log(result);
    return breathe(1000);
  })

  .then(result => {
    console.log(result);
    return breathe(800);
  })

  .then(result => {
    console.log(result);
    return breathe(200);
  })

  .catch(err => {
    console.error('Error', err);
  });
```

#### Introduction to async & await

```js
function breathe(time) {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      reject('Time is too short to breathe.');
      return;
    }

    setTimeout(() => {
      resolve(`Breathed for ${time} milliseconds.`);
    }, time);
  });
}

async function breathe3times() {
  const result1 = await breathe(500);
  console.log(result1);
  const result2 = await breathe(1000);
  console.log(result2);
  const result3 = await breathe(800);
  console.log(result3);
}

breathe3times();
```

> **Important**
>
> `await` can be used only inside a function marked as `async`.

#### Using `try` and `catch` to catch errors

```js
function breathe(time) {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      reject('Time is too short to breathe.');
      return;
    }

    setTimeout(() => {
      resolve(`Breathed for ${time} milliseconds.`);
    }, time);
  });
}

async function breathe3times() {
  try {
    const result1 = await breathe(500);
    console.log(result1);
    const result2 = await breathe(400);
    console.log(result2);
    const result3 = await breathe(800);
    console.log(result3);
  } catch (err) {
    console.error('Error', err);
  }
}

breathe3times();
```

#### Using `catch` on the `async` function

```js
function breathe(time) {
  return new Promise((resolve, reject) => {
    if (time < 500) {
      reject('Time is too short to breathe.');
      return;
    }

    setTimeout(() => {
      resolve(`Breathed for ${time} milliseconds.`);
    }, time);
  });
}

async function breathe3times() {
  const result1 = await breathe(500);
  console.log(result1);
  const result2 = await breathe(400);
  console.log(result2);
  const result3 = await breathe(800);
  console.log(result3);
}

breathe3times().catch(err => {
  console.error('Error', err);
});
```

#### Waiting for multiple promises with `async` and `await`

```js
async function getGithubRepos() {
  const appleRepositories = fetch('https://api.github.com/users/apple/repos');
  const googleRepositories = fetch('https://api.github.com/users/google/repos');

  // Wait for both of them
  const result = await Promise.all([appleRepositories, googleRepositories]);
  const dataPromises = result.map(response => response.json());
  const data = await Promise.all(dataPromises);
  console.log(data);
}

getGithubRepos();
```

#### Promisifying callback based functions

**Callback based functions**

```js
navigator.geolocation.getCurrentPosition(
  function success(position) {
    console.log(position);
  },
  function error(err) {
    console.error('Err', err);
  },
);
```

**Promisifying a callback based functions**

```js
function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function go() {
  console.log('starting');
  const position = await getPosition();
  console.log(position);
  console.log('finished');
}

go();
```

You can also use libraries to promisify callback based functions (useful in NodeJS)

* [es6-promisify](https://www.npmjs.com/package/es6-promisify)
* [util.promisify](https://nodejs.org/api/util.html#util_util_promisify_original)
* and many many others...
