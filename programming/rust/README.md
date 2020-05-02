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

