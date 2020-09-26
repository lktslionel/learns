# Vitualization 


THe goal is to create a virtual reality of the pysical world.
Regarding IT, relaity refers to 4 cores : 

* Network
* Storage (Block device)
* CPU
* Memory

It provides an abstraction layer (Hypervisor) that allow different operating systems and distributions to exist ont he same hardware.


## Simulation vs Emulation vs Virualization

#### Simulation 
A system that is made to behave like something else. It acts similar to what it is being simulated.
In simulation, we're focusing on the reproducing some state but not all parts.
> Eg: A flight simulator try to mimic the flight of a plane and the experience surroundings.

#### Emulation
A system that is made to be a complete replica of another system. Here we are reproducing every components that made an entire system. 
> Eg: Nitendo NES emulator tries to make a sofwafter system works like a Nitendo NES console.

#### Virtualization
It seeks to divide the host resources between multiple guest OS. But, note that the **guest OSs** must be compatible with the **host** architecture. Some hypervisor allow code to run as if the OS was natively installed.

## Types of virtualization

### HVM (Hardware Virtual Machine)

They are virtual machine created by a hardware assisted virtualization system.

  * Guest OS are unaware that it is virtual
  * OS runs unmodififed on the virtual machine
  * Bette rportability
  * Take advantage of x86 arch's virtualization extensions
    > Extensions are used by the hypervisor to run efficiently and to make a better use of the underline hardware.

    * VT-x (Intel)
    * AMD-v (AMD)

Example of HVM hypervisors : 

  * VMware ESXi
  * XEN
  * KVM
  * Hyper-V

These are used to virtualized compute (CPU). To virtualize physical memory and make an efficient use of the host memory, we use **EPT**(**E**xtended **P**age **T**ables).

> **Terminal**
> ```sh
> $ grep -E '(svm|vmx)' /proc/cpuinfo
> # svm : AMD
> # vmx : Intel
>
> # Or 
> 
> $ lscpu
> #=> ...
> #=> Hypervisor Vendor: xxxxx
> #=> Virtualization:    xxxxxx
> # 
> ```


### Paravirtualization (PV)

It is a lightweight virtual technique introduced by the Xen Team. 

* Guest OS must be modified (requires **kernel support and drivers**)
* Does **NOT** require virtualization extensions
* It bypass emulation and communicate with hypervisors efficiently using hypercalls
* Offers near-native performance (more performant than HVM (full emualtion) 


### Container virtualization (OS Level Virutalization)

  * Containers seems to work like a VM while internally, there are using Linux Namespaces for isolation and Cgroups for resource allocation.
  * Use only wath is needed by the application
  * Uses less resources than VMs and runs fastly because of no emulation overhead. Containers are just natives processes.

Isolation by Namespace types: 

  * Process ID
  * Mount
  * IPC
  * User
  * Network

##### Examples

* Docker
* LXC/LXD

## Ring Architecture layers

|Layer (Ring)  |  Desc             |
|:------------:|-------------------|
|3             |  User mode        |
|1 & 2         |  Device & Drivers |
|0             |     Kernel Mode   |
|-1            |    Hypervisors    |

## Hypervisors

An **Hypervisor** is a program that allow many VMsto run on a signle peace of hardware.
It redirects different requests got 4 cores related resources to virtual equivalents.

We also like to call hypervisors: **Virtual Machine Monitors**

### Types

#### Type 1 (T1)

Eg: 

  * Xen
  * Hyper-V
  * VMWare ESXi
  * KVM + QEMU(Quick EMUlator : Emulateur de machine virtuelle Xen/KVM)



```
+---------+  +--------+  +----------+
|  VM G1  |  |  VM G2 |  |   VM Gx  |
+---------+  +--------+  +----------+
+-----------------------------------+
|        HYPERVISOR (T1)        [*] |
+-----------------------------------+
|        HARDWARES (H/W)            |
+-----------------------------------+
```

#### Type 2 (T2)

Eg:

  * Virtualbox
  * VMWare Fusion

```
+---------+  +--------+  +----------+
|  VM G1  |  |  VM G2 |  |   VM Gx  |
+---------+  +--------+  +----------+
+-----------------------------------+
|         HYPERVISOR (T2)       [*] |
+-----------------------------------+
|            HOST OS                |
+-----------------------------------+
|          HARDWARES (H/W)          |
+-----------------------------------+
```