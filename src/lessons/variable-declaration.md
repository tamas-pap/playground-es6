# Variable declaration

### Introduction

* Variables declared with `var` are function scoped, can be redeclared and reassigned.
* Variables declared with `let` are block scope, can not be redeclared, but can be reassigned.
* Variables declared with `const` are block scope, can not be redeclared, or reassigned.
* Variables declared with `let` or `const` are not hoisted.

```js
function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}
```

```js
function letTest() {
  let x = 1;
  if (true) {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

### Using `let` in async functions inside for loops

```js
for (var i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log('The number is ' + i);
  }, 1000);
}
```

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log('The number is ' + i);
  }, 1000);
}
```

> **Advice**
>
> Always use `const` and `let`, instead of `var`. If possible, prefer `const`.
