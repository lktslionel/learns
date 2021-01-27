## 1. Basics



- [1. Basics](#1-basics)
  - [1.1 Core components](#11-core-components)
  - [1.2 Terraform commands](#12-terraform-commands)
- [2.0 Common usecases](#20-common-usecases)
  - [2.1 Terraform state](#21-terraform-state)
  - [2.2 Planinig Updates](#22-planinig-updates)
- [3.0 Configuration](#30-configuration)
  - [3.1 Blocks](#31-blocks)
  - [3.2 Types](#32-types)
  - [3.3 References](#33-references)
  - [3.4 Provisionner](#34-provisionner)
  - [3.5 Locals](#35-locals)
- [4.0 Functions](#40-functions)
  - [Common functions](#common-functions)
  - [Networking](#networking)
- [5.0 Providers](#50-providers)
- [6.0 Resource arguments](#60-resource-arguments)
- [7.0 Advanced](#70-advanced)
  - [7.1 Variables and Functions](#71-variables-and-functions)
  - [7.2 Workspaces](#72-workspaces)
  - [7.3 Modules](#73-modules)


### 1.1 Core components

* **exec**
* **files**: `.tf` file
* **plugins**
* **state** : current state of the configuration to track changes


* **variables**: Can be located in `.tfvars` files
  ```tf
  variable "key" {}
  variable "key" {
    type = string 
    default = "xxxx"
  }
  ```
* **providers**
  ```tf
  provider "aws" {
    option = "var.xxxxxxxx"
  }
  ```
* **data** Pull data from a provider
  ```tf
  data "aws_ami" "alx" {
    option = true
    owner  = ["amazon"]
    filters {}
  }
  ```
* **resources** 
  ```terraform
  resource "aws_instance" "<name>" {
    option = "data.aws_ami.alx.id"
    instance_type =  "t2.micro"
  }
  ```
* **Outputs** 
  ```tf
  output "aws_public_ip" {
    value = "aws_instance.ex.public_dns"
  }
  ```


### 1.2 Terraform commands

* `init`: Initialize terraform & download required plugins
* `plan`: Create a change plan
* `apply`: Apply your plan
* `destroy`: Detroy your infrastructure
* `workspace`: Manage workspace
* `fmt`: Run formatter for your files
* `show`: Show the current content of terraform state


## 2.0 Common usecases

### 2.1 Terraform state

State file(`.tfstate`) is a JSON file use to track changes. it is manage by terraform.

It suppports **locking** to avoid other changes to be done while the a current change is running.

It can be stored:
* **Local**
* **Remote**: AWS, Azure, NFS, Terraform Cloud

It is **workspace** aware. Each workspace point to a specific state file.

### 2.2 Planinig Updates

Is a good practice to save your terraform plan in a `.tfplan` file.


## 3.0 Configuration

### 3.1 Blocks 

```tf
block_type label_oe label_two {
  key = value
  embedded_block {
    key = value
  }
}
```

Example

```tf
resource "aws_route_table" "route-table" {
  vpc_id = "xxxxxxx"
  route {
    cidr_block = "X.X.X.X/X"
  }
}
```

### 3.2 Types

|Type|Example|
|----|-------|
| `string`| `"nice"` |
| `number`| `5` |
| `bool`| `true` |
| `list`| `["one", "two"]` |
| `map`|  `{ name = "test", age = 42, is_restarted = true }`|


### 3.3 References

```toml
var.test_name
aws_instance.x
local.var
moduule.<module_name>

# Interpolation
test_name = "neds-${var.test_name}"

# Retrieve from a list
local.names[N]
local.ids_map["keyname"]
```


### 3.4 Provisionner


* local-exec
* remote-exec

```tf
provisioner "<NAME>" {

}
```


### 3.5 Locals

use `locals` to define a set of local vars to used within your configuration

```tf
locals {
  tags = {
    BillingCode = var.billing_code_tag
  }
}
```


## 4.0 Functions

You can test your functions using the `terraform console`

### Common functions 

```tf
min
max

lookup(map, key, default_value)

local.var_name1

merge(map, { key = val })
```

### Networking

```tf
cidrsubnet(addr_space, bits, sunet_count)
cidrhost(cidr, host_count)
```


## 5.0 Providers

Supports **alias** referencing in resource.

```tf
provider  "name" {
  opt = val
  alias = "expl1"
}

resource "xxxxx" "yyy" {
  opt = val
  provider = name.expl1
}
```

## 6.0 Resource arguments

* for_each
  ```
  for_each {
    key = val
  }

  each.key
  each.value
  ```

* count
  ```
  count = 3
  count.index
  ```

Retreive all values from a map using `[*]`
```
aws_subnet.subnet[*].id
``` 

## 7.0 Advanced

### 7.1 Variables and Functions

### 7.2 Workspaces



Without **workspace**, yoou have to set flags: 

```sh
terraform plan -state="dev/dev.state" -var-file="common.tfvars" -var-file="dev/dev.tfvars"
```
for a given directory structure:

```
examples/sample1/
.
├── common.tfvars
├── config.tf
├── dev
│   ├── dev.state
│   └── dev.tfvars
├── prod
│   ├── prod.state
│   └── prod.tfvars
└── uat
    ├── uat.state
    └── uat.tfvars
```

To create a new workspace, run:

```sh
$: terraform workspace new <WORKSPACE_NAME>
```


### 7.3 Modules

It is a way to do code re-use in terraform

The folder structure for a module is:

```
module1
├── main.tf       # Resources we are creating
├── outputs.tf    # things we are exposing to the root module
└── variables.tf
```

To use your module: 

```
module "<MODULE_NAME>" {
  source = "/path/relative/to/the/root/dir/modules/<MODULE_NAME>"
  
  var1   = val1
  var2   = val2
}
```