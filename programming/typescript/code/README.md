# Typescript

<br>

## Contents

* 01 - [Quickstart]
* 02 - [Variables & data types]
* 03 - [Loops]
* 04 - [Functions]
* 05 - [Errors handling & Exceptions]
* 06 - [OOP]
* 07 - [Collections]
* 08 - [Advanced concepts]
* 09 - [Resources]

<br>

## 01 - Quickstart

### Install

<br>

## 02 - Variables & data types


### 02.1 Cautions

### Variable declarations

##### Var
> **Var** declaration **IS NOT** block-scoped but it is function scoped

##### Let
> **Var** declaration **IS NOT** function-scoped but block-scoped

##### Const
> **Const** declaration **IS NOT** hoisted.



<br>

## 03 - Loops


<br>

## 04 - Functions


<br>

## 05 - Errors handling & Exceptions


<br>

## 06 - OOP


<br>

## 07 - Collections 



<br>

## 08 - Advanced concepts 

### 08.01 - Immutability

Use `Object.freeze` to make a object immutable.
### 08.02 - Hoisting 

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

### 08.03 - Types conversion

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

### 08.04 - Webpack
### Testing


### Design patterns

<br>

## 09 - Resources 

### Code samples
<!-- Links -->
[Quickstart]: #01-quickstart  
[Variables & data types]: #02-variables-data-types
[Loops]: #03-loops
[Functions]: #04-functions   
[Errors handling & Exceptions]: #05-errors-handling-exceptions
[OOP]: #06-oop
[Collections]: #07-collections
[Advanced concepts]: #08-advanced-concepts
[Resources]: #09-resources

