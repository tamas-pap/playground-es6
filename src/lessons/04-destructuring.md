# Destructuring

## Array destructuring

#### Introduction

```js
const foo = ['one', 'two', 'three'];
const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

#### Default values:

```js
const [a = 5, b = 7] = [1];

console.log(a); // 1
console.log(b); // 7
```

#### Swapping variables:

```js
let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

#### Ignoring some returned values:

```js
const [a, , b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 3
```

#### Assigning the rest of the array to a variable:

```js
const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
```

## Object Destructuring

#### Introduction

```js
const o = { p: 42, q: true };
const { p, q } = o;

console.log(p); // 42
console.log(q); // true
```

#### Assignment without declaration:

```js
let a, b;
({ a, b } = { a: 1, b: 2 });
```

#### Assigning to new variable names:

```js
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
```

#### Default values:

```js
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
```

#### Assigning to new variable names and providing default values:

```js
var { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
```

#### Unpacking fields from objects passed as function parameter

```js
function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  console.log(displayName + ' is ' + name);
}

var user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstName: 'John',
    lastName: 'Doe',
  },
};

console.log('userId: ' + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```

#### Exercises:

1.  ** Create a bill calculator function that expects an object, and destructs it:**

```js
function calculateBill({ total = 100, tax = 0.2, tip = 0.15 } = {}) {
  return total + total * tax + total * tip;
}

let total;

total = calculateBill({ total: 200, tax: 0.3, tip: 0.2 });
console.log(total);

total = calculateBill({ total: 200 });
console.log(total);

total = calculateBill();
console.log(total);
```
