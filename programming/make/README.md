# Make

Naming convention 

https://www.gnu.org/prep/standards/html_node/Makefile-Conventions.html


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

### Basic

For comments use `#`

A rule is written like this : 

```makefile
target: deps
<tab><instructions>
```


If your target is not a file, use the folowing directive

```makefile
.PHONY=target
target:
  ....
```

Example : 
```makefile
.PHONY=clean
clean:
  @rm -rf <files>
```

<br>

## 02 - Variables & data types


`=` recursive expanded variables 

`:=` simply expanded variables
> Use this, when you have vars like $(VAR) that needs to be expanded.


Automatic variables :

| Var | Desc  |
|-----|-------|
| $@	| File name of the rule's target |
| $%	| The target member's name, if the rule's target is an archive |
| $<	| File name of the first prerequisite |
| $^	| List of all prerequisites |
| $?	| List of all prerequisites that are newer than the target |
| $*	| The "stem" of an implicit or pattern rule |

<br>


## 04 - Functions


<br>

## 05 - Errors handling & Exceptions

<br>


### Check variables existance

```
target:
ifndef VAR 
		$(error VAR in required)
endif
ifndef VAR1 
		$(error VAR1 in required)
endif
ifndef VAR2 
		$(error VAR2 in required)
endif
```



<br>

## 06 - Conditionnals 

<br>

```makefile
cond:
ifeq($(VAR), VALUE)
  CMD = ls
endif

```


<br>

## 07 - Collections 



<br>

## 08 - Advanced concepts 


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
