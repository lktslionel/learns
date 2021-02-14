# Serverless


DynamoDB is 

* Serverless
* Cloud
* NoSQL
* Fast
* Flexible
* Cost Effective
* HA / HS
* Fault tolerant
* Secure

## Terminology

| SQL / RDMS  | DynamoDB  |
|---|---|
| Tables  |  Tables |
| Rows  |  Items |
| Columns  |  Attributes |
| Primary keys (Composed)  |  Primary keys (Composed max 2 attrs) <br> - Partiton Key<br>- Sort(Range) Key) |
| Indexes  |  Local Secondary Indexes |
| Views  |  Global Secondary Indexes |


It is a **JSON Document store**


## Data types

* Scalar: `String, Number, Binary(blob of text), Boolean, Null)`
* Set: `String[], ...` *— Same scalar type, No duplicate, Not Empty*
* Document: `List, Map` *— Complex nested attrs

<br>

* **List** is Ordered, Mixed Scalart types collection
* **Map** is Unordered Key-Value collection


## Concepts

### Consistency Model

> AWS = Regions > AZs > Facilities

DynamoDB supports Automatic Synchronous Replication: 3 copies within a region in 3 facilities

### Throughput capacity

It allows for predictable performance in the table at scale.
It supports **autoscaling** but you can define your desired WCU/RCU.

1 CU = 1 Request/s

| | RCU  |  WCU |
|-|---|---|
|Eventual Consistancy | 2  |  - |
|Strong Consistancy | 1  |  1 |
|Block size | 4K  | 1K  |

This help compute the throughput: KB/s given an item size.

You have burst capacity for exceeding capacity period. 5min = 300s unused read/write.
Beyond that, the request will be throttled.

### Partition

```
+----------------------------------------------------------+
|  AWS REGION                                              |
|                                                          |
|   +---------------------------------------------------+  |
|   |                                            TABLE  |  |
|   |                                                   |  |
|   | +------------+    +------------+                  |  |
|   | | PARTITION  |    | PARTITION  |                  |  |
|   | |            |    |            |                  |  |
|   +---------------------------------------------------+  |
|     | 10 G       |    |            |                     |
|     | 1000 WCUs  |    |            |                     |
|     | 3000 RCUs  |    |            |                     |
|     |            |    |            |                     |
|     +------------+    +------------+                     |
|                                                          |
+-----------------------------------------------------------
```

Number of partitions
```python
Pt = round((Provisionned RCU/3000) + (Prov WCU/1000))

# Example
# 500 RCU and 500 WCU => Pt = 0.67 ~ 1 Partition 
```

When you provision new capacity, DyDB creates more partitions and divide **evenly** the throughput and the capacity across those new partitions.

### Indexes

* Primary Indexes (Table index key)
  * Partition Key
  * Composite Key (Partition Key/Sort Key)
* Secondary Indexes:
  * Local
  * Global

### Operations

#### Scans
Should be avoided at all cost. 

## Advanced Topics


### Limits

#### Scaling

* Scale UP : AS needed
* Scale Down : 4 Times a Day
* 1 Partition supports: 
  * 1000 WCUs
  * 3000 RCUs
  * 10 Gb
