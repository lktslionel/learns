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


### Variable declarations

#### Var
**Var** declaration **IS NOT** block-scoped but it is function scoped

#### Let
**Var** declaration **IS NOT** function-scoped but block-scoped

#### Const
**Const** declaration **IS NOT** hoisted

> Use `Object.freeze` to make a object immutable


### Types conversion

the `+` operator tries to convenrt things to string 

```js
'45' + 1 // => 451 (string)
```

`unary +` operator tries to convenrt thing to numbers 

```js
(+ '45') // => 45 (number)
```

`-` tries to make calculation and output a number

```js
'45' - 1  // => 44 (number)
```