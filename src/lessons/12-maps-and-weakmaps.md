# Maps and WeakMaps

#### Introduction

Sets are for arrays, Maps are for objects.

```js
const dogs = new Map();
dogs.set('Snickers', 3);
dogs.set('Sunny', 2);
dogs.set('Hugo', 10);

console.log(dogs.has('Snickers'));
console.log(dogs.get('Snickers'));

for (const dog of dogs) {
  console.log(dog);
}

// Use destructuring
for (const [key, value] of dogs) {
  console.log(key, value);
}
```

#### In maps you can use objects as keys

```html
<!DOCTYPE html>
<html>
  <body>
    <button>Like👍🏻</button>
    <button>Love❤️</button>
    <button>Funny😀</button>
    <button>Sad🙁</button>

    <script>
      const clickCounts = new Map();
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        clickCounts.set(button, 0); // Note how we use the button as key

        button.addEventListener('click', function() {
          const val = clickCounts.get(this);
          clickCounts.set(this, val + 1);
          console.log(clickCounts);
        });
      });
    </script>
  </body>
</html>
```

#### Working with WeakMaps

```js
let snickers = { name: 'Snickers' };
let sunny = { name: 'Sunny' };

const map = new Map();
const weakMap = new WeakMap();

map.set(snickers, 'Snickers is the best!');
weakMap.set(sunny, 'Sunny is the best!');

console.log(map.size);
console.log(weakMap.size); // undefined

snickers = null;
sunny = null;

// Wait a couple of seconds for garbage collection...

console.log(map); // note how the set still has the original snickers object
console.log(weakMap); // note how the original sunny object was garbage collected and removed
```
