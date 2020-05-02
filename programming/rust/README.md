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
* [7 Collections](#7)
* [8 Advanced concepts](#8)
  * [8.1 Testing](#8.1)
  * [8.2 Rustdoc](#8.2)
  * [8.3 Closures](#8.3)
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

## <a name="3"/>3 Loops
## <a name="4"/>4 Functions & macros
## <a name="5"/>5 Errors handling & Exceptions
## <a name="6"/>6 OOP
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

* Generate mock impl of `traits` and `functions`
  * Use [`double::mock_trait!(...)`](https://docs.rs/double/latest/double/macro.mock_trait.html) macro
  * Implement the original trait methods using the macro `mock_method!(...)`



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