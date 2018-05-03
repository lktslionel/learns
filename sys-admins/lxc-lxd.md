###### LEARN / SYS-ADMIN

# LXC / LXD 

## LXD vs Docker

Containers share the kernel of the host but they are a self contained execution  environment (CPU, I/O Network). It is efficient when dealing with resources sharing. But They are affect by everything related to host overhead. They use Cgroups and Namespaces to separate applications. No additionnal overhead of a n hypervisor.

The fact that containers shared the physical host, could brings security flaws but some techniques are used to prevent that.

Below, 2 diagrams recalling how VMs and container are architectured : 

```
  +---------+ +--------+                +---------+ +--------+
  |   App 1 | | App 2  |                |   App 1 | | App 2  |
  +---------+ +--------+                +---------+ +--------+
  +---------+ +--------+                +---------+ +--------+
  |   Lib   | |  Libs  |                |   Lib   | |  Libs  |
  +---------+ +--------+                +---------+ +--------+
  +---------+ +--------+                +--------------------+
  |Guest OS | |   -    |                |      Host OS       |
  +---------+ +--------+                +--------------------+
  +--------------------+                +--------------------+
  |   Hypervisor       |                | Physical Host      |
  +--------------------+                +--------------------+
  +--------------------+
  |      Host OS       |                Container Arch.
  +--------------------+
  +-------------------- +
  | Physical Host      |
  +--------------------+

  Virtual machine Arch.
```
