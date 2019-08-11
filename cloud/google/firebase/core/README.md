###### CLOUD • GOOGLE • FIREBASE
# Firebase Fundamentals

**Firebase** is a NoSQL Realtime Backend as a service. It use to add data and queries them effectively.

## Prerequisites

* Basic Javascript programming skills 

## Missing Features

* Joins
* Qurey filters


## Concepts

#### Refs


A ref is like a database; see the diagram below : 

```
                 +----------+      +-----------+
             +-> |  USERS   +----->+ ACCOUNTS  |
             |   +----------+      +-----------+
             |
+---------   |
|  ROOT  +---+
+---------

```



to create one use the following code : 

```js
var UsersRef = new Firebase("https://os.firebaseio.com/users")
```

To access `accounts` ref from `users`, use:

```js
var AccountsRef = new Firebase("https://os.firebaseio.com/users/accounts")
// or 
var UsersRef = new Firebase("https://os.firebaseio.com/users")
var AccountsRef = UsersRef.child("accounts")
```

You can also use the following methods to navigate from `child` to the `parent` and even the `root` database (node) : 

```js
REF.child(...)
REF.parent(...)
REF.root(...)
```


#### Auto indexing
When you delete the value "nice" in a table like 

```
[
  0 => "lol"
  1 => "data"
  2 =>  "nice"
  3 =>  "seal"

]
```

To get :


```
[
  0 => "lol"
  1 => "data"
  2 =>  "seal"

]
```

#### Firebase core principles 

##### Don't think relational 
##### `Root` branches as Primary container


##### avoid deep Nesting

nesting could be painful because, when you're requesting data form a ref, you get everything; even nesting data. Make the best use of linking database in order to simulate joins.

```bash
users -> accounts -> adresses

# could be

users: ...

users_accounts: ...

accounts_adresses: ...
```

##### Make good use of date duplication

Sometimes you will need to duplicate data in order to address a business need.
Just make sure you're not duplicating too much if your application write often.

##### Design Around your Data access patterns

First, think about your data access needs


## Objectives 


## 

## References

* [Pluralsight | Firebase Fundamentals](https://www.pluralsight.com/courses/firebase-fundamentals)

