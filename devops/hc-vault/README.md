# HC Vault 



- [HC Vault](#hc-vault)
  - [01. Architecture](#01-architecture)
  - [02. Initialization](#02-initialization)
  - [03. Usage](#03-usage)



## 01. Architecture

Core concepts in vault:

* API
* Token
* Policies
* Core
* Path-Routing
* Secrets
* Auth
* Audit
* System
* Stoorage backend

## 02. Initialization 

When running **vault** for the first time, your vault will be sealed. 
You will then need to unseal it. Run the following commands 

```sh
vault operator init
vault operator unseal 
```

## 03. Usage

You must set the folloing env vars to make fun with vault:

```sh
export VAULT_ADDR="http(s)://ADDR:PORT" # http://0.0.0.0:8200
export VAULT_TOKEN="xxxxxxxx"
```


