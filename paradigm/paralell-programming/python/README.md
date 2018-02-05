# Parallel programming in python


## Key concepts 


### Parallel computing architecture

#### Quick Overview

A CPU cycle is compose of thhe following steps : 

  1. **Fetch** : Get DATA and instruction for the registry 
  2. **Decode** : Decode the instructions
  3. **Execute** : Instructions are executed and the result is stored in another registry



#### Flynn's taxonomy classification 

##### SISD

uniprocessor machine (single CPU) - Instruction are execute my the processor sequentially. 

The CPU load instructions stored in the Control Unit (memory) and execute thoses instructions. Data IN/OUT are refer as I/O system.

The CPU is compose of the following components : 

- ALU (Arithemic Logic Unit)
- Control Unit 
- Decode Unit 
- Registers 
- BUS unit  
- Data Cache 
- Instruction Cache

Those components are used in fetch-decode-execute phase of any cycle.

##### MISD

We got N processors operating on the same DATA. They are doing different quite of operating and could be performing tasks related to a sub-problem, part of a main problem.
Each processoror share the same memory where they load data from, and, get their instructions from their own control unit.


##### SIMD

We got N identical processor with their own memory unit to store their data from, and, they retrieve their instructions from the same control unit.
The same instruction is executed by those N processor on N different data streams. (called ***Data Level Parallelism)  



##### MIMD

The more complex and powerful class of parallelism. Wse got N processor and N data streams. Each processoror got it own control unit and local memory. Unlike SIMD class, the MIMD class can deal with problems with a non-regular data structure. The fact that we have to deal with asynchronous algorithms makes difficult to think, analyze and implement them.


<br>

#### Memory Mgt

**memory cycle time** : Time elapsed between 2 successive operations

This time is crutial because it affects the overall performance of our processor. In this cycle time, only one processor can access the momery what implies that the shorter this time is, the faster another processor can take on another task to execute.

MIMD class leads to 2 models of memory management : 
* **Shared** : All processors used a shared memory unit.
* **Distributed** :  All processors keep, each, a local memory unit containing their data structure and shared data are send as a message among processors. 

##### Shared model 

* **Pros** : 
  - All processor use the same memory and logical memory addresses are also accessible on the same location
  - Access is fast because to the cycle time is equal to the time needed to read a single memory location 
  - Synchronization : It is done by controlling the access to the shared memory through Lock, semaphores, etc

* **Cons** : 
  - Cache coherency problems

4 way to access memory : 

* **UMA** : 
  - Constant access time
  - Simple to implement but not scalable
  - Use Lock, semaphores to manage resources
* **NUMA** : 
  - 2 memory areas : one for high-speed access and another one for common data exchange access (slower)
  - It is scalable
  - Also called Distributed Shared Memory System
* **NORMA** : 
  - Memroy is phisically distributed among processors
  - Local memory are private for each processor
  - Use message passing protocol to exchange messages
* **COMA** : 
  - Fix duplicate data from the NUMA architecture
  - Keep only cache momories for fast access
  - Use a physical memory distributed among processors (like NORMA)
  - Use message passing protocol to exchange messages




##### Distributed model

In this model, memory is distributed and each processor can only access its own memory.
Each processor is compose of a memory, a cache, I/O; each one can act as a complete system connected through the network.

* **Pros**
  - Full utilization of local memory bandwidth
  - No common bus means no limit on processors
  - Only limited by the network used to connect the processors
  - No cache coherency problems; Each processor is responsible for its own data
* **Cons**
  - Hard to implement communication among processors
  - 


