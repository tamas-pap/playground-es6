# Spread and Rest

## Spread

#### Replace apply

```js
function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction.apply(null, args);

function myFunction(x, y, z) {}
const args = [0, 1, 2];
myFunction(...args);
```

#### Apply for new

```js
const dateFields = [1970, 0, 1]; // 1 Jan 1970
const d = new Date(...dateFields);
```

#### A more powerful array literal

```js
const parts = ['shoulders', 'knees'];
const lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]
```

#### Copy an array

```js
const arr = [1, 2, 3];
const arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected
```

#### A better way to concatenate arrays

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
// Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

```js
let arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];
```

#### Spread in object literals

```js
const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

## Rest

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

```js
function sortRestArgs(...theArgs) {
  const sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // shows 1, 3, 5, 7
```

```js
function sortArguments() {
  const sortedArgs = arguments.sort();
  return sortedArgs;
}

// throws a TypeError: arguments.sort is not a function
console.log(sortArguments(5, 3, 7, 1));
```

#### Exercises

1.  **Implement the convertCurrency function that accepts a rate, and a list of values to be converted.**

```js
function convertCurrency(rate, ...values) {
  ...
}
```
