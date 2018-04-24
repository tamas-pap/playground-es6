# Proxies

#### Introduction

[Proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) allow you to overwrite the default behavior of objects.

```js
const person = { name: 'Sarah', age: 100 };
const personProxy = new Proxy(person, {
  get(target, name) {
    console.log('someone is asking for ', target, name);
    return target[name].toUpperCase();
  },

  set(target, name, value) {
    if (typeof value === 'string') {
      target[name] = value.trim();
    }
  },
});

let name = personProxy.name;
console.log(name);

personProxy.name = '   Sarah Conor ';
name = personProxy.name;
console.log(name);
```

#### Phone number handler

```js
const phoneHandler = {
  set(target, name, value) {
    target[name] = value.match(/[0-9]/g).join('');
  },

  get(target, name) {
    return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1)-($2)-($3)');
  },
};

const phoneNumbers = new Proxy({}, phoneHandler);

phoneNumbers.work = '(234) 234 2345';
console.log(phoneNumbers.work);
```
