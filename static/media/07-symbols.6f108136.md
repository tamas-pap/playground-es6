# Symbols

#### Introduction

```js
const dog = Symbol('Caesar'); // Caesar is not the value of the symbol, it's just a descriptor
console.log(dog);
```

#### Symbols are always unique

```js
const dog1 = Symbol('Caesar');
const dog2 = Symbol('Caesar');
console.log(dog1 == dog2); // false
```

#### Where to use Symbols

```js
const classRoom = {
  Mark: { grade: 50, gender: 'male' },
  Olivia: { grade: 80, gender: 'female' },
  Olivia: { grade: 40, gender: 'female' }, // We can not have two elements with the same name
};

const classRoom = {
  [Symbol('Mark')]: { grade: 50, gender: 'male' },
  [Symbol('Olivia')]: { grade: 80, gender: 'female' },
  [Symbol('Olivia')]: { grade: 40, gender: 'female' },
};

console.log(classRoom);

for (let person in classRoom) {
  console.log(person);
} // logs nothing, since symbol properties are not enumerable

const symbols = Object.getOwnPropertySymbols(classRoom);

const data = symbols.map(symbol => classRoom[symbol]);
console.log(data);
```

> **Benefits:**

> Avoiding naming collisions
