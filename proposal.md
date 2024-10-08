# zkApp-based GitLab/Github Job Runner with Performance Sampling and Zero-Knowledge Proofs

##### Impact:
This proposal contributes to enhancing the Mina ecosystem by offering improved tools for job execution and verification, encouraging adoption, and attracting more users and developers. 
The idea is to be able to host an ecosystem of gitlab runners each offering different services for different prices. 
It enables novel applications by integrating GitLab job runners with zero-knowledge proofs, creating a secure and efficient ecosystem for resource sharing and selling.
People can offer thier services to provision on other services, for example passing a smart contract that will provide the implementation driver as another zkapp
so that this higher order function takes another function as a parameters. 

## Vision

Imagine if you can onboard new customers into mina via one click github applications 
that charge setup fees via github to create a wallet that is funded and stored as a secret encrypted build variable
in your personal github account.

Imagine using a simple continuous build system like github actions or gitlab runners that
would setup a wallet for your and put the keys into your variables in a secure and
automated way, this would allow for parameterizing your acount with crypto wallets automatic.

Imagine if you can capture the runtime of any job in a multitude of ways,
using language specific profiling and linux perf recordings, prometheus and grafana monitoring.

You would then be able write your zkapp as series of standard typescript tests using jest in npm, using the o1js 
library, you can define each condition that needs to be kept, each test result creates a zk-snark about
the execution of the application.

In github actions via build parameters, or calling your build via an api server via other zkapps 
you can set the parameters and github variables that are used in the build as values to construct contexts for calling other functions, so you can compose any service out of trusted build actions.

Imagine if you can just add a plugin to your github actions or gitlab
and easily create and deploy mina test networks, wallets and zero
knowledge proof apps that are defined in your existing github or
gitlab build system, it could be used to run the jobs that deploy your
apps or trigger some AI jobs connected to your ticket system or resell
any parts of those and earn tokens.

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

The long-term vision for this project is to create an ecosystem of zkApps that provide the full CICD pipeline,
development environment and profiling environment like github and gitlab, something that can build and replace all parts of the infrastrucure in trusted manner.
This will enable secure and efficient resource sharing and selling within the Mina ecosystem. 
This will encourage adoption, attract more users and developers, and enable novel applications.

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

#### Project Background

We want to allow people to sell trusted executions of gitlab runners to users on the mina blockchain
in the beginning for open source software operating on open source inputs and outputs but later for private inputs and code. We will show that these functions will be sufficient eventually to allow for the system to bootstrap itself and replace its own implementation using this system creating a gradual stepwise bootstrap.

The proposed project aims to create a zkApp that integrates with GitLab (and later github etc) to trigger job runners via mina payments with API calls, sample the runtime using custom Linux `perf` or other observability techniques such as prometheus, and hash the results of the execution by combining the hash of the source with the inputs and outputs recursivly. The zkApp will deduct a certain amount of funds from the user's account upon successful execution and verification of the job. This system will utilize a fungible token mechanism where users can share custom build job resources and sell them to other user at market certain prices, creating an ecosystem of zkApps that can build and eventually rebuild and replace themselves. 
End goal should be zkapps tools that can help you build and deploy new zkapps themselves as side effects.

For build jobs and services that use some funding source such as free tier or some granted tokens 
we will disable the service if the funding dries up, using health checks or other ways to check preconditions. 
Also any changes to the source code should also create a new contract so that users once they review the application will know that nothing will change on its execution profile. 

This project is designed to enhance the Mina ecosystem by providing a secure and efficient way to manage and verify the execution of GitLab jobs, leveraging zero-knowledge proofs to ensure the integrity and authenticity of the process.

### Create tiny web functions as zkapp that :

-  allows calling of devops jobs stores a private api token of gitlab or github and uses
web functions to trigger execution of jobs in gitlab or github via an api.
- sample more and more of the execution of the definition of the gitlab runner to expose or prove more about it.
this is the idea of the linux root level observability system named perf that allows user probes to be setup
to interrupt and effeciently sample any program at runtime 
to allow for sampling of any value in the system at any time with no modification to the source code.

The samples can be exposed and agreed upon and proven not to reveal any senstive data via data flow analysis and other techniques. We can improve on this system incrementally. 
- Provide web gui and schemas in openapi/xml-json-rpc/grpc/protobuf/soap for validating the parameters of any given function system.
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


#### Proposal Overview

##### Problem:
Currently, there is no integrated solution that allows users to trigger GitLab job runners, sample their runtime performance, and verify the results using zero-knowledge proofs within the Mina ecosystem. 

There are oracles that can attest to data on the chain. 

#### Previous work

###### Private code and trusting third party execution.

The problem of proving the proper execution of complex steps is currently intractible to my knowledge, 
we cannot solve this problem but start working towards developing semi verified and trusted applications.

The existing web2 market is based around consensus, contracts, law, and regulation, and a trust of the user in the system they are using.

Developer who are offering services to users might want to provide private implementations of some job but allow the results to be executed, this could be done via this interface allowing for reproducible jobs with private implementations as well as public ones.
The hope is that long term migration from private code to public code once it has financed itself. Private llm models might be trained and leveraged in this way as well providing unique results and value propositions. 
 

##### Solution:
The proposed solution is a zkApp that integrates with GitLab to trigger job runners, samples the runtime using `perf`, hashes the results, and verifies the execution using zero-knowledge proofs. The zkApp will deduct funds from the user's account upon successful verification, ensuring that the account is active and working.

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

The project will be delivered in steps, each useful features on thier own.

1. Step 1. One week, delivery of clinic js profiling [proposals/grant1/monitoring/clinic-js.md](proposals/grant1/monitoring/clinic-js.md) 5000 MINA

**Budget Requested:**

1. Step 1 : 5000 MINA

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

