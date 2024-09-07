# zkApp-based GitLab/Github Job Runner with Performance Sampling and Zero-Knowledge Proofs

## Short ideas 

Imagine if you can just add a plugin to your github actions or gitlab
and easily create and deploy mina test networks, wallets and zero
knowledge proof apps that are defined in your existing github or
gitlab build system, it could be used to run the jobs or deploy your
apps or trigger some jobs or add in ai to your ticket system or resell
any parts of those and earn tokens.

Step 0.  Add MINA test net plugin to your existing github account to
create a mina test network and token for your project itself that
lives in your git repo and runs on commit to update it knowledge
arguments and polynomial commitments about your commits and code.

Step 1. Add Mina expose build job plugin to your existing github
action and turn your deployment job into a zkapp that is resellable.

Step 2. Add Mina expose webapp second level plugin to your existing
github deploy action and turn your deployment resulting system into a
zkapp that is resellable.

Step 3. Use your favorite ai agent in a docker container in a github action
to execute on comment and have it have its own wallet and use other resources and pay for them 
in the different mina network tokens you hold.

Step 4. We can search and index git repos and construct arguments of knowledge about them as owners or users
and publish those in github and find them. We can condense existing git repos and reduce their size, removing blobs or replacing them with descriptors. This will let us search those repos for things. 

Step 5. We can create a set of types and instances as prime numbers.
We can then say there are N types in this repo. Each of the types will
be represented as a prime number.  The type of types as a prime. So we
can then index them, say prime number type of types is 2.  The prime
for a type n is then is 2^n +1.  If that number is not a prime, we add
1 until we find the next prime or use some table of primes.  This
allows for each instance of the objects in the system to get a unique
prime number if we want to treat it as a type. we also have our map of
environments that contain the previous commitments so we dont double
book a type.  This means the type numbers depend on the order they are
constructed if there are different primes available, it could lead to
different incompatible schemas.

We can make it easy for users to add an action into github or gitlab
that automatically creates a dev wallet, stores the secrets in a
variable, gets money from a faucet, and uses that to deploy a smart
contract that will allow it to be called for money or other conditions
to create an easy way to onboard code into the zkp world.

We can deploy custom private gitlab runners that execute ai agents
talking to llms that respond to user tickets on behalf of users with
secure parameters and delivery of results to ipfs and be paid in mina.

To do this we can wrap authentication to web2 apps in zkapps that
offer specific services to be paid for in mina coin. One web hook
running javascript anywhere can host the zkapp that calls the gitlab
or github cicd.  There are quite a few multi-backend systems available
running in containers or in wasm.

## Plant UML Diagrams

### Sequence Diagrams

#### Timeline

Users purchase a mina account for 1 mina, and deposits 1 more mina to pay for fees.

With account A, user registers ZK App Z1 for 0.1 mina fee.

https://docs.minaprotocol.com/zkapps/writing-a-zkapp/introduction-to-zkapps/how-to-deploy-a-zkapp


### Create tiny web functions as zkapp that :

-  allows calling of devops jobs stores a private api token of gitlab or github and uses
web functions to trigger execution of jobs in gitlab or github via an api.
- sample more and more of the execution of the definition of the gitlab runner to expose or prove more about it.
this is the idea of the linux root level observability system named perf that allows user probes to be setup
to interrupt and effeciently sample any program at runtime 
to allow for sampling of any value in the system at any time with no modification to the source code.

samples can be exposed and agreed upon and proven not to reveal any senstive data via data flow analysis and other techniques. We can improve on this system incrementally. 
- create a gui and typescript for validating the parameters of said system.
- provision new endpoints for users on the a private mina network or test net to reduce fees. We can deploy a new contract for the user on a test net that is not so expensive to run.

Later we can 
- Allow calling of cloud apis via zkapps, stores a private api token of aws or gcp 
and allow them to be used to provision cloud resources on the behalf of the gitlab server. This would allow this function to be passed in as the target for execution.

Later we can 
- evaluate TEE Trusted execution platforms https://docs.clique.tech/ allow for trusted execution.
- run llms https://github.com/ora-io/awesome-ora
- use lurk-rs lisp to define functions 

recursively. We can construct proofs of the functions called and include those in the final proof. 
etc.

## Costs

The current price of mina is USD $0.40 down from a high of $4.5 at the beginning. 
The cost of creating an account is 1 mina.
The transaction cost of calling a zkapp is 0.1 mina minimum.
The fee of the zkapp function is an optional fee starting at  1/1 billionth mina.


#### Project Background

We want to allow people to sell trusted executions of gitlab runners to users on the mina blockchain
in the beginning for open source software operating on open source inputs and outputs but later for private inputs and code. We will show that these functions will be sufficient eventually to allow for the system to bootstrap itself and replace its own implementation using this system creating a gradual stepwise bootstrap.

The proposed project aims to create a zkApp that integrates with GitLab (and later github etc) to trigger job runners via mina payments with API calls, sample the runtime using custom Linux `perf` or other observability techniques such as prometheus, and hash the results of the execution by combining the hash of the source with the inputs and outputs recursivly. The zkApp will deduct a certain amount of funds from the user's account upon successful execution and verification of the job. This system will utilize a fungible token mechanism where users can share custom build job resources and sell them to other user at market certain prices, creating an ecosystem of zkApps that can build and eventually rebuild and replace themselves. 
End goal should be zkapps tools that can help you build and deploy new zkapps themselves as side effects.

For build jobs and services that use some funding source such as free tier or some granted tokens 
we will disable the service if the funding dries up, using health checks or other ways to check preconditions. 
Also any changes to the source code should also create a new contract so that users once they review the application will know that nothing will change on its execution profile. 

This project is designed to enhance the Mina ecosystem by providing a secure and efficient way to manage and verify the execution of GitLab jobs, leveraging zero-knowledge proofs to ensure the integrity and authenticity of the process.

#### Proposal Overview

##### Problem:
Currently, there is no integrated solution that allows users to trigger GitLab job runners, sample their runtime performance, and verify the results using zero-knowledge proofs within the Mina ecosystem. 

There are oracles that can attest to data on the chain. 

###### Long term goals 

Create mechanisms to :
- prove the execution of known open source code in private servers
- show the influence of open source LLM weights being executed in private.
- prove the repeated execution of same private code in private via monitoring and augmentation.

So the idea is that we can hash the :
- source code of the program.
- key values of the users input being modified in the program 
- key outputs of the program

in functional basic blocks and show that these blocks executed. 
then sum up those blocks to create checksums for entire program execution.

We want to show that the output hash is derived from the input hash and source code hash in such a way
without revealing all of the source code. We want to show that the source code did not change so that the 
user knows that its still the same program they agreed to.

We will start with open source programs and known inputs and outputs and then stepwise replace parts of that with labeled black boxes to hide parts of the implementation. 

#### Previous work

###### Generic oracles in mina

Mina supports generic oracles where a trusted server writes checksums of some results to a blockchain as a hash. 
This allows for the oracle to attest to the values of system. It does not solve the issue that the oracle might be wrong. 

https://docs.minaprotocol.com/zkapps/tutorials/oracle


######  ZKTls

There is the generic TLS oracle that can certify websites.

https://blog.reclaimprotocol.org/posts/zk-in-zktls

###### Private code and trusting third party execution.

The problem of proving the proper execution of complex steps is currently intractible to my knowledge, 
we cannot solve this problem but start working towards developing semi verified and trusted applications.

The existing web2 market is based around consensus, contracts, law, and regulation, and a trust of the user in the system they are using.

Developer who are offering services to users might want to provide private implementations of some job but allow the results to be executed, this could be done via this interface allowing for reproducible jobs with private implementations as well as public ones.
The hope is that long term migration from private code to public code once it has financed itself. Private llm models might be trained and leveraged in this way as well providing unique results and value propositions. 
 

##### Solution:
The proposed solution is a zkApp that integrates with GitLab to trigger job runners, samples the runtime using `perf`, hashes the results, and verifies the execution using zero-knowledge proofs. The zkApp will deduct funds from the user's account upon successful verification, ensuring that the account is active and working.


###### Gitlab

According to the documentation,

https://docs.gitlab.com/ee/ci/triggers/#use-curl

We can call the gitlab endpoint like this .

```
curl --request POST \
     --form token=<token> \
     --form ref=<ref_name> \
     "https://gitlab.example.com/api/v4/projects/<project_id>/trigger/pipeline"
```

Or the webhook like this
`https://gitlab.example.com/api/v4/projects/<project_id>/ref/<ref_name>/trigger/pipeline?token=<token>`

We can pass in varaiables to the execution as well:
https://docs.gitlab.com/ee/api/pipeline_triggers.html#trigger-a-pipeline-with-a-token

One of those parameters could be a url to another system where the results will be stored.

###### Generic runners

####### Figma plugin 
There is an example of a multi-backend figma plugin that calls gitlab and other cicd systems
https://github.com/mikaelvesavuori/figma-plugin-continuous-design/

####### Keptn
https://github.com/keptn-contrib 

####### cloud pi native console
A french program that contains a bunch of different cicd backends
https://github.com/cloud-pi-native/console


##### Impact:
This proposal contributes to enhancing the Mina ecosystem by offering improved tools for job execution and verification, encouraging adoption, and attracting more users and developers. 
The idea is to be able to host an ecosystem of gitlab runners each offering different services for different prices. 
It enables novel applications by integrating GitLab job runners with zero-knowledge proofs, creating a secure and efficient ecosystem for resource sharing and selling.
People can offer thier services to provision on other services, for example passing a smart contract that will provide the implementation driver as another zkapp
so that this higher order function takes another function as a parameters. 

###### Use cases

####### Bootstrap gitlab runner.

We can create a smart contract that deploys a gitlab runner to an aws account with the permissions passed to the server via secure parameters. 

##### Audience
The target audience of this project includes developers, users, and organizations that utilize GitLab for continuous integration and deployment. 
It also targets users and developers within the Mina ecosystem who are interested in leveraging zero-knowledge proofs for secure and efficient job execution.

#### Architecture & Design

**Detailed Design/Architecture:**
1. **Trigger GitLab Job Runner:**
   - Use GitLab's API to trigger job runners.
   - Store the API endpoint and credentials securely on-chain.

2. **Sample Runtime with Linux `perf` Commands:**
   - Use `perf` to sample the runtime of the job.
   - Capture the performance data and hash it.

3. **Hash the Results of the Execution:**
   - Hash the output of the job and the performance data.
   - Store the hash on-chain.

4. **Zero-Knowledge Proof (ZKP) Implementation:**
   - Implement a ZKP to prove that the account is active and working.
   - Deduct funds from the account when the ZKP is verified.

5. **Fungible Token System:**
   - Implement a fungible token system where users pay to host the system and earn coins from other users.

6. ** User interface** 

It should be possible to interactivly specify the parameters to the job in html nextjs typescripton the client side and use the users wallet to execute the code.
It should be possible to create an interactive web page that the user can chat or interact with and execute code. We can provide different functions that help the user specify the parameters. 
we can imagine a llm interface or other ml application that is provided to help the user prepare the results. 

**Vision:**
The long-term vision for this project is to create an ecosystem of zkApps that can build and replace themselves, enabling secure and efficient resource sharing and selling within the Mina ecosystem. This will encourage adoption, attract more users and developers, and enable novel applications.

**Existing Work:**
[GitHub Repository Link] (If applicable)

There are currently tools to create generic oracles running on https://vercel.com/docs/functions vercel functions. We can use these functions or others to trigger the calls to the gitlab. Alternativly there 
are lambda functions and other tools like wasm on the edge https://developers.cloudflare.com/workers/runtime-apis/webassembly/.  
More research is needed if we can create onetime urls that are decoded and executed by the client with out a function server.
Also we can research if the requests can be written into a private queue or ipfs server that is revealed via the static zkp server so that the smart contract points you at an endpoint to get the results or exchange data.
This will allow static only hosting. 

**Production Timeline:**
We expect this project to be in production within N months.

#### Budget & Milestones

**Deliverables:**
- Detailed specification and design
- Integration with GitLab API to trigger job runners.
Users will be able to add in urls and secrets to the zkapp and validate the results. 
- later Integration with GitHub API to trigger job runners.
- Implementation of runtime sampling using `perf`.
- Hashing of job output and performance data.
- Zero-knowledge proof implementation for account verification and fund deduction.
- Fungible token system for resource sharing and selling.

**Mid-Point Milestones:**
- Completion of GitLab API integration and runtime sampling.
- Create of single function to call a single job and validate the parameters explicitly
- Creation of fungable token that allows for users to register many different custom functions.
- Creation of git oracle that allows reading in results from git or ipfs into runtime of proof 
- Implementation of hashing mechanism for job output and performance data and signing of the data as a proof.
- Initial implementation of zero-knowledge proof for account verification.

**Project Timeline:**
TBD.

**Budget Requested:**

TBD.

**Wallet Address:**
B62qqFdiPRuMuQQYYo131saW1fp4f72rKXLVy2KTQEtnJzg5Hz3SqEY

#### Team Info

**Proposer GitHub:**
[[GitHub Profile]](https://github.com/jmikedupont2)

**Proposer Experience:**
[Relevant experience building zkApps or other dApps, including links if available]

**Team Members:**
- [Mike Dupont]: [Lead Developer], Senior Devops, [[GitHub Profile]](https://github.com/jmikedupont2)

**Achievements:**
- [Existing projects or achievements of the team]

#### Risks & Mitigations

**Risks:**
- Integration challenges with GitLab API.
- Mode of execution of the oracle functions
- Performance sampling accuracy and reliability.
- Security vulnerabilities in zero-knowledge proof implementation.
- Market adoption and user engagement.

**Mitigations:**
- Thorough testing and QA to ensure seamless integration with GitLab API.
- Continuous monitoring and optimization of performance sampling.
- Regular security audits and updates to the zero-knowledge proof implementation.
- Marketing and outreach efforts to promote the project and engage users.

## Frequently asked questions

- What is the minimum fee for calling a zkapp? What if I set my fee to just 1/billionth of a mina? 1/1e9 of a mina? What are the transaction fees for processing that fee? How can I see that?

The network transaction fee is 0.1 mina, and the app can charge additional fees on top we have seen 0.1 - 2 and more.

## References 

### Price 

#### ZKapp Fees

https://minascan.io/mainnet/tx/5JvQTouheGHgZMZzHPWS8UowkHcm6zUMV62qitynL63JuYtBnbLb/txInfo

Looking at some existing contracts, the fee is defined in nanomina like this 
`const fee = Number(config.fee) * 1e9; // in nanomina (1 billion = 1.0 mina)`
so some have      `fee: 1e8,` for 1/10 of a mina.
others define the fee to be 1 mina.

### Gpt Defintions

### perf

The Linux `perf` tool is designed as a root-level observability system that provides powerful and efficient sampling of any running program at runtime. It allows users to set up user probes (also known as `uprobes`) to monitor, interrupt, and sample various performance metrics without the need for modifying the source code of the program being observed.

Key features include:
- **Event-driven Sampling**: `perf` captures data based on specific performance events (e.g., CPU cycles, cache misses, page faults) and can provide insights into the behavior of programs.
- **User Probes (Uprobes)**: This feature allows users to monitor user-space applications by dynamically inserting probes at function entry/exit points or arbitrary code locations. 
- **Kernel Probes (Kprobes)**: Similar to uprobes, `kprobes` allow for monitoring kernel events.
- **Low Overhead**: Designed for minimal performance impact, enabling efficient data collection and analysis even in production environments.
- **Broad Scope**: It can monitor not only the application-level events but also system-wide events such as scheduler activities, disk I/O, network performance, and more.

With `perf`, developers and administrators gain detailed visibility into how programs interact with hardware, the kernel, and the rest of the system, making it invaluable for performance tuning, debugging, and system optimization.
