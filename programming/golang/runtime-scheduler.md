###### PROGRAMMING
# GO Runtime Scheduler

<br>

## Quick overview

THe GO Scheduler works with 3 entities: 

* G : The Gorotines
* P : Processor or Context
* M : Machine or OS Thread


### Machine

Every machine keep track of the following informations:

* **curg** : The current running goroutine
* **g0** : The goroutine with a scheduling task
* **p** : A pointer to the the processor that holds the OS Tread
* **p** : A pointer to the the processor that holds the OS Tread
* **spinning** : A boolean that tells if the machine is idle

### Processor

Every processor gather the following main elements:

* **m** : The machine which is executing the Goroutine or a task
* **runq** : A queue that contains all Goroutine that the processor should run  

### Goroutine

* **m**: The current machine that is executing the Goroutine


## Scheduling strategies

There are 2 main scheduling strategies : 

* **shedtick**: a processor make sure that each goroutine is executed within a defined time slice. When the execution take longer than expected the goroutine is put back into the run queue of the processor.

* **work-stealing**: When a processor no goroutine left to execute, it steals half of the goroutine of another processor runqueue.

<br>

## Goroutine Gotchas

### Gotcha 1

Panic on a Goroutine will halt the complete program, if not hanlded

**Solution**

Use the `defer` statement to recover from failure in your Goroutine.

```

func simpleFunc(index int, wg *sync.WaitGroup) {

    defer func() { 
        if r := recover(); r != nil { 
            fmt.Println("Recovered from", r) 
        } 
    }() 
    ...
    defer wg.Done()
```

### Gotcha 2

Don't try to predict the order of execution of your Goroutines.


<br>

## Channels and Messages
