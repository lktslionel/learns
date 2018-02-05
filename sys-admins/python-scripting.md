# Python scripting


<br>

## Basics

### Difference between `==` and `is` :

* `==` means `equivalent`
* `is` means `actually is`

### Loops

This for loop structure does **NOT** exist in python : `for i=0; ...`


### User input

The two functions used are : 
* `raw_input(..)` : returns always a string as a result
* `input(..)` : return the value with type casting

<br>

## Standart library

### Time

Convert time string to time_struct 

```python
time.gmtime(spend_time)
```

Example of script using env vars : 

```python
!/usr/bin/python3

import time
import os
import re



start_time = time.localtime()
print("Timer start at {}".format(time.strftime("%X", start_time)))

if re.match(r"([yY]|yes|Yes)", str(os.environ.get("SKIP_INPUT"))) :
  print("Skip...")
else:
  input("Please press Entrer to continue...")

stop_time = time.localtime()
spend_time = time.mktime(stop_time) - time.mktime(start_time)
spend_time = time.gmtime(spend_time)
print("Time spent {}".format(time.strftime("%X", spend_time)))
```

<br>

### Files

Open file in append mode 

```python
with open('result.txct', 'a') as file:
  file.read()
  file.readline()
  file.readlines()
  file.write()
  file.writelines([])  
```

<br>

### CLI 

Using the sys package : 

```python
import sys

print("Args : {}".format(sys.argv))
```

<br>

Using the argparse package : 

```python
import argparse

parser = argparse.ArgumentParser(
                description="Read a file")
parser.add_argument('filename', help='the file to read')
parser.add_argument('--reverse', '-r', type=bool, help='Read the text in reverse order')
parser.add_argument('--version', '-v', action='version', version='%(prog)s 0.1.0', help='Show version')
args = parser.parse_args()

print(args)
```


<br>

### Execute Shell commands : 

```python
import shlex, subprocess

res = subprocess.run(shlex.split("ls -al /"), stdout=subprocess.PIPE)) # python3.6

# Available methods and attrs

res.args
res.check_returncode
res.returncode
res.stderr
res.stdout

```
