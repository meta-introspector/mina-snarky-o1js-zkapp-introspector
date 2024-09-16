### Navigators Season 2: Starter Grants Proposal

#### Title
**Proposal Title: Augmenting O1JS TypeScript npm Test Job with Performance Recording and Function-Level Profiling**

#### Project Background
The project aims to enhance the testing infrastructure of a TypeScript application by integrating performance recording and function-level profiling within a Docker container started by Docker Compose in github actions. This will enable developers to identify performance bottlenecks and optimize their code more effectively with no setup costs. The current setup involves running tests using npm, but lacks detailed performance insights. This proposal seeks to address this gap by leveraging profiling tools like `clinic` for javascript level profiling.

#### Proposal Overview
**Problem:** The current testing setup lacks detailed performance insights, making it difficult to identify and address performance bottlenecks.

**Solution:** Integrate performance recording and function-level profiling using `clinic` within the Docker container started by Docker Compose in a github action.

**Impact:** This proposal will significantly enhance the Mina ecosystem by providing developers with improved tools for performance analysis, encouraging adoption, and attracting more users and developers. It will enable novel applications by facilitating better performance optimization.

**Audience:** The target audience for this project includes developers and teams working on TypeScript applications within the Mina ecosystem.

#### Architecture & Design
**Detailed Design/Architecture:**
The proposed solution involves updating the Dockerfile to install necessary profiling tools, modifying the Docker Compose configuration to include profiling commands, and updating test scripts to run with profiling.

1. **Dockerfile and compose update:**
We have already created a dockerfile for o1js and demonstrated that we can collect strace.
The docker compose runs in a github action.

2. **Test Script Update:**

We will use the https://github.com/dfloresc/clinicjs-pipeline to augument the mina o1js code in the first step.
The following steps can expand with more detailed performance monitoring.


**Vision:** The long-term vision for this project is to create a robust testing framework that provides detailed performance insights, enabling developers to build highly optimized applications within the Mina ecosystem.
It also will help extract knowledge from the o1js codebase for the following step, providing valuable intermediates.

**Existing Work:** 

https://github.com/meta-introspector/o1js/actions/runs/10874552509 This run demonstrates
the running of part of the o1js test framework in github and collecting performance traces with strace as a simple
example. 

**Production Timeline:** 

The project is expected to be in production within 1 week.

#### Budget & Milestones
**Deliverables:**
- Updated Dockerfile with profiling tools installed. 
- Modified Docker Compose configuration to include profiling commands.
- Updated test scripts to run with profiling.
- Documentation on how to use the profiling tools.

**Mid-Point Milestones:**
- Completion of Dockerfile and Docker Compose updates.
- Initial testing of profiling setup.
- Preliminary documentation.

**Project Timeline:** 1W

**Budget Requested:** 

40 Hours * 100 MINA = 4000 MINA + 1000 MINA Contingency

**Budget Breakdown:**
- Development: 3,000 MINA
- Testing and QA: 1,000 MINA
- Documentation: 1,000 MINA
- Contingency: 1,000 MINA

**Wallet Address:**
Coinbase Wallet B62qqFdiPRuMuQQYYo131saW1fp4f72rKXLVy2KTQEtnJzg5Hz3SqEY


#### Team Info
**Proposer Github:** https://github.com/jmikedupont2

**Proposer Experience:** The proposer has experience building github pipelines and performance tuning.

**Team Members:**
- **Member 1:** Role - Lead Developer, Experience - [Relevant Experience], GitHub - https://github.com/jmikedupont2
- **Member 2:** Role - QA Engineer, TBD

**Achievements:**
- Successfully developed and deployed docker build already.
- Studied the ocaml of mina, the parts of the rust of pasta
- Studied the o1js of mina

#### Risks & Mitigations
**Risks:**
- Integration issues with profiling tools.
- Performance overhead introduced by profiling.
- Delivery of the results

**Mitigations:**
- Thorough testing and validation of profiling tools.
- Optimization of profiling setup to minimize performance impact.
- Regular communication with the community for feedback and support.
- Usage of accepted and standard tools for profiling nodejs
