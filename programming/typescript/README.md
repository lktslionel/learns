# Typescript

<br>

## Contents
- [Contents](#contents)
- [01 - Quickstart](#01---quickstart)
  - [Install](#install)
- [02 - Variables & types](#02---variables--types)
  - [02.1 Types](#021-types)
  - [02.2 Cautions](#022-cautions)
  - [Variable declarations](#variable-declarations)
- [03 - Loops](#03---loops)
- [04 - Functions](#04---functions)
- [05 - Errors handling & Exceptions](#05---errors-handling--exceptions)
- [06 - OOP](#06---oop)
- [07 - Collections](#07---collections)
- [08 - Advanced concepts](#08---advanced-concepts)
  - [08.01 - Immutability](#0801---immutability)
  - [08.02 - Hoisting](#0802---hoisting)
  - [08.03 - Types conversion](#0803---types-conversion)
  - [08.04 - Webpack](#0804---webpack)
  - [Testing](#testing)
  - [Design patterns](#design-patterns)
- [09 - Resources](#09---resources)
  - [Code samples](#code-samples)

<br>

## 01 - Quickstart

### Install

<br>

## 02 - Variables & types

### 02.1 Types

If you want to know the type of a value, use: `typeof(...)`

### 02.2 Cautions

### Variable declarations


* **Var** declaration **IS NOT** block-scoped but it is function scoped
* **Var** declaration **IS NOT** function-scoped but block-scoped
* **Const** declaration **IS NOT** hoisted.



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

