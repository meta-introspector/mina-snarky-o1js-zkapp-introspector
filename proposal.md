### Navigators Season 2: Growth Grants Proposal

#### Proposal Title
**zkApp-based GitLab Job Runner with Performance Sampling and Zero-Knowledge Proofs**

#### Project Background
The proposed project aims to create a zkApp that integrates with GitLab (and later github etc) to trigger job runners via mina payments with API calls, sample the runtime using custom Linux `perf` or other observability techniques such as prometheus, and hash the results of the execution. The zkApp will deduct a certain amount of funds from the user's account upon successful execution and verification of the job. This system will utilize a fungible token mechanism where users can share resources and sell them at certain prices, creating an ecosystem of zkApps that can build and replace themselves.

For services that use some funding source such as free tier or some granted tokens we will disable the service if the funding dries up, using health checks or other ways to check preconditions. 
Also any changes to the source code should also create a new contract so that users once they review the application will know that nothing will change on its execution profile. 

This project is designed to enhance the Mina ecosystem by providing a secure and efficient way to manage and verify the execution of GitLab jobs, leveraging zero-knowledge proofs to ensure the integrity and authenticity of the process.

#### Proposal Overview

**Problem:**
Currently, there is no integrated solution that allows users to trigger GitLab job runners, sample their runtime performance, and verify the results using zero-knowledge proofs within the Mina ecosystem. 

*** Private code ***
The problem of proving the proper execution of complex steps is currently intractible, we cannot solve this problem but start working towards developing semi verified and trusted applications.
Users might want to provide private implementations of some job but allow the results to be executed, this could be done via this interface allowing for reproducible jobs with private implementations as well as public ones.
The hope is that long term migration from private code to public code once it has financed itself. Private llm models might be trained and leveraged in this way as well providing unique results and value propositions. 
 

**Solution:**
The proposed solution is a zkApp that integrates with GitLab to trigger job runners, samples the runtime using `perf`, hashes the results, and verifies the execution using zero-knowledge proofs. The zkApp will deduct funds from the user's account upon successful verification, ensuring that the account is active and working.

**Impact:**
This proposal contributes to enhancing the Mina ecosystem by offering improved tools for job execution and verification, encouraging adoption, and attracting more users and developers. 
The idea is to be able to host an ecosystem of gitlab runners each offering different services for different prices. 
It enables novel applications by integrating GitLab job runners with zero-knowledge proofs, creating a secure and efficient ecosystem for resource sharing and selling.
People can offer thier services to provision on other services, for example passing a smart contract that will provide the implementation driver as another zkapp
so that this higher order function takes another function as a parameters. 

**Audience:**
The target audience of this project includes developers, users, and organizations that utilize GitLab for continuous integration and deployment. It also targets users and developers within the Mina ecosystem who are interested in leveraging zero-knowledge proofs for secure and efficient job execution.

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
[MINA Wallet Address]

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

