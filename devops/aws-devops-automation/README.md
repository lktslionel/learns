###### DEVOPS
# AWS Devops Automation 


### Introduction 

A Devops Engineer collaboration with Developers, QA/Tester, the Business and other IT Staff 
to orchestrate the softwares' deliveries/releases in a lean way.


#### CI/CD


|Source   |<span style="color: lightgrey">→</span>|Test  |<span style="color: lightgrey">→</span>| Build |<span style="color: lightgrey">→</span>| Release  |<span style="color: lime">✓</span>| Deploy |
|---      |---|--    |---|---    |---|---       |---|---     |


#### Disaster Recovery RTO/RPO

##### Strategies 

|   | Backup & Restore  | Pilot Light  | Warm Stand-by| Multi-Site|
|---|---                |---            |---          |---        |
| Time  | Hours         | 10s of minutes| Minutes     | Near Real-time|
| Services  | S3, Storage Gateway | Core services need scale in response to event | -   | Auto failover |
| Costs     |  `$`                  | `$$`     | `$$$` |  `$$$$` |


<br>


### AWS CodeBuild

#### Sources 

* No source
* AWS S3
* AWS Codecommit
* Github / Github Entreprise
* Bitbucket

#### Environment

* Managed image
* Custom docker image



### AWS Code Pipeline

#### Sources 


 
