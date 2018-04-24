# Tenplate literals

#### Introduction

```js
const name = 'Rex';
const age = 2;
const sentence = 'My dog ' + name + ' is ' + age * 7 + 'years old.';
```

```js
const name = 'Rex';
const age = 2;
const sentence = `My dog ${name} is ${age * 7} years old.`;
```

#### Multiline strings

```js
console.log(`string text line 1
string text line 2`);
```

#### Nesting templates

```js
const classes = `header ${isLargeScreen() && `icon-${item.isCollapsed ? 'expander' : 'collapser'}`}`;
```

#### Tagged template literals

```js
const person = 'Mike';
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "My friend "
  const str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // const str2 = strings[2];

  let ageStr;
  if (ageExp > 99) {
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  return str0 + personExp + str1 + ageStr;
}

var output = myTag`My friend ${person} is a ${age}`;

console.log(output);
// My friend Mike is a youngster
```

#### New String methods

```js
const flightNumber = '20-AC128-AHZ';
flightNumber.startsWith('20'); //true
flightNumber.endsWith('-AHZ'); //true
flightNumber.includes('AC12'); //true

function leftPad(str, length=20) {
  return ${' '.repeat(20 - str.length)}${str};
}
```

> **Benefits**
>
> * Much easier to build strings
> * Supports multiline expressions

#### Exercises

1.  **Create a html fragment having the following movie names in `<li></li>` items.**

```js
const movies = [
  { title: 'The Godfather', year: 1972, length: 180 },
  { title: 'Pulp Fiction', year: 1994, length: 165 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2003, length: 190 },
  { title: 'Inception', year: 2004, length: 175 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002, length: 187 },
  { title: 'The Matrix', year: 1999, length: 188 },
  { title: 'The Usual Suspects', year: 1995, length: 160 },
  { title: 'Léon: The Professional', year: 1994, length: 165 },
  { title: 'Saving Private Ryan', year: 1998, length: 173 },
  { title: 'Interstellar', year: 2014, length: 195 },
];
```

The result should look like this:

```html
<ul>
  <li>The Godfather</li>
  <li>Pulp Fiction</li>
  <li>...</li>
</ul>
```

2.  **Create a the following template literal**

```js
var output = movieRating`${movie} is a ${rating} movie.`;
console.log(output);

// The movieName is a good movie. (if rating > 6)
// The movieName is a bad movie. (if rating < 6)
```
