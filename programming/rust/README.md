###### PROGRAMMING
# Rust






## Contents



<!-- TOC -->
* [1 Quickstart](#1)
* [2 Variable & Basic data types](#2)
  <!-- * [2.1 Overview](#2.1)
  * [2.8 Privacy](#2.8) -->
* [3 Loops](#3)
* [4 Functions & macros](#4)
* [5 Errors handling & Exceptions](#5)
* [6 OOP](#6)
  * [6.1 6.1 Structs and methods](#6.1)
* [7 Collections](#7)
* [8 Advanced concepts](#8)
  * [8.1 Testing](#8.1)
  * [8.2 Rustdoc](#8.2)
  * [8.3 Closures](#8.3)
  * [8.4 Conventions](#8.4)
  * [8.5 Enums & Pattern Matching](#8.5)
    * [8.5.1 Basics](#8.5.1)
    * [8.5.2 Basics](#8.5.1)
* [9 Resources](#9)
<!-- /TOC -->


<br>

## <a name="1"/> 1 Quickstart

### New project 

```powershell
PS> cargo new [--lib|--bin] <NAME>

# ./<NAME>/
# ├── Cargo.toml
# └── src
#     └── main.rs
```
### Build

Building creates a target dir where your binary is located in `target/debug/<NAME>`. 
```powershell
PS> cargo build

# └── target
#     └── debug
#         ├── build
#         ├── deps
# ...
#         ├── incremental
# ...
#         ├── <NAME>
# ...
```
 
#### Install 

You can install your binary in the system using :

```powershell
PS> cargo install
# Or
PS> cargo install --path .
```

THe binary is located at `$HOME/.cargo/bin/<NAME>`.


<br>

## <a name="2"/>2 Variables and basic types

### <a name="2.2"/>2.2 Strings

Strings in Rust use UTF-8 encoding.
By default, when you create a string in the traditional way, you get a `&str`, which is a pointer to a `str` type.
To get the actual string from that, you must use `.to_string()` methods.

```rust
fn main(){
  // You can either use the constructor 
  let s = String::from("Hello 🤗");

  println!("Chars");

  for c in s.chars() {
    println!("{}", c);
  }
  // Chars
  // H
  // e
  // l
  // l
  // o
  //  
  // 🤗

  println!("Bytes");

  for b in s.bytes() {
    println!("{}", b);
  }

  // Bytes
  // 72
  // 101
  // 108
  // 108
  // 111
  // 32
  // 240
  // 159
  // 164
  // 151
}

```

As you've probably noticed, the string doesn't have the same length whether
their are represented as chars or bytes.

To get the len of a string, which correspond to the number of bytes a string has, use:

```rust
let s = String::from("My String");
println!("Len = {}", s.len());
// Len = 10
```



### <a name="2.3"/>2.3 Arrays (vectors)

In **Rust**, arrays are called **vectors**. 

```rust
fn main(){
  // You can either use the constructor 
  let mut arr = Vec::new();
  arr.push(1);
  arr.push(2);
  arr.push(3);

  // Or the vec! macro
  let arr = vec![1,2,3];

  for val in arr {
    println!("{}", val);
  }
}

```


<br>

## <a name="3"/>3 Loops

You have `loop` key construct, which act like a `while` loop but with no condition;
to break out of the loop, you should use `return`.

```rust
loop {
  ...
  return;
}
```

Or you can also use the well known `for` construct like so:

```rust
for i in 0..10 { // 1..10 is a range.
  ...
}
```

> You can use `continue`, `break` within a loop statement.

For a `while` loop : 


```rust
while <cond> {
  ...
  return;
}
```

In Rust you can tag a loop and then specify where the `break` statement should take effect : 


```rust
'<LOOP_TAG>: for  ... {
  ...
  for ... {
    ...
      break '<LOOP_TAG> 
  }
  return;
}
```

## <a name="4"/>4 Functions & macros
## <a name="5"/>5 Errors handling & Exceptions

## <a name="6"/>6 OOP
## <a name="6.1"/>6.1 Structs and methods

To define a struct: 

```rust
#[derive(Debug)]
struct Server {
    id:i32,
    hostname:String,
    os:String,
}
```


`#[derive(Debug)]` directive make the struct pretty-printable. 
To properly display the struct with `println!(...)` you must use as a string placeholder `{:?}` instead of the simple `{}`.

**Example**

```rust
fn main() {
    
    let s = Server{
        id: 1,
        hostname: "localhost".to_string(),
        os: "macos".to_string(),
    };

    println!("{:?}", s);
}
```

You can also define your own display method : 

```rust

impl Server {
  // Use `&mut` if you want to modify the struct inside the function
  // `&self` prevent you from using the `self` struct 
  // `self` consume the struct 
  fn reference(&self) -> String {
    format!("{}#{}", self.hostname, self.id);
  }
}

```


## <a name="7"/>7 Collections

<br>

## <a name="8"/>8 Advanced concepts
### <a name="8.1"/>8.1 Testing

#### Unit testing

In rust, unit test are written inside the module code.
So, if you're writing some code in `car.rs`, your unit test will be inside this module.

```rust 
# File: cars.rs

# Your code here

#[cfg(test)]
mod test {
  use super::*;

  // 
  #[test]
  fn test_xxxx() {
    // ...
  }

}

```

For an example, look inside the [`code/todo/src/main.rs`](code/todo/src/main.rs) file.

##### Mocking 

Try to mock these things : 

* **External data source** : Files, databases
* **Network connections** : Services
* **External deps** : libraries


We use different kinds of test doubles to do moking : 

* **Spies** : Behavior verification
* 


We use the `double` crate to create test doubles for instances : 

* Generate mock impl of `traits` 
  * Use [`double::mock_trait!(...)`](https://docs.rs/double/latest/double/macro.mock_trait.html) macro
  * Implement the original trait methods using the macro `mock_method!(...)`

* Generate mock impl of `functions` 
  * Use [`double::mock_func!(...)`](https://docs.rs/double/latest/double/macro.mock_func.html) macro



##### More

More videos to learn unit testing in Rust : 

* [Youtube | Rust Testing and TDD - An Intro to Testing and Test Driven Development](https://www.youtube.com/watch?v=2vBQFIWl36k)
* [Youtube | Testing in Rust — Donald Whyte](https://youtu.be/sZ8mF3CBAZE)



### <a name="8.2"/>8.2 Rustdoc

We use the command `rustdoc` to generate the complete doc site of our Rust project.

```powershell
PS> rustdoc /path/to/rust/files/rs
```

> Check out the [example](https://doc.rust-lang.org/stable/rust-by-example/meta/doc.html) from rust-lang.org.

### <a name="8.2"/>8.3 Closures


<br>

### <a name="8.4"/>8.4 Conventions
#### <a name="8.4.1"/>8.4.1 Naming
##### <a name="8.4.1.1"/>8.4.1.1 Functions

Use **snake case** as naming convetion for your functions.

```rust
fn my_fn_name() {...}
```

<br>

### <a name="8.5"/>8.5 Enums & Pattern Matching
#### <a name="8.5.1"/>8.5.1 Basics

Enums are often used along with pattern matching. To declare an enum do this:

```rust
enum KV<A,B> {
  Key(A),
  Value(B),
}
```

See [code examples](code/enums) in `code/enums` to learn more about how to use **enums**

#### <a name="8.5.2"/>8.5.2 Result type

The **Result Type** is an enum that has two members `OK(...)` and `Err(...)`. 

```rust
enum Result<T, E> {
   Ok(T),
   Err(E),
}
```

