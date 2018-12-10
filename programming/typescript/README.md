# Learning TypeScript


## JS Basics



### Hoisting 

> Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function

```js
x = 4;
console.log(x);
var x;

```

This ends up being interpreted by the browser as : 

```js
x = 4;
var x;
console.log(x);
```

> **Var** declaration **ARE NOT** block-scoped!