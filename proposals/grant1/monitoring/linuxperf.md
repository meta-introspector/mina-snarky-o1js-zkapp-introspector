### Navigators Season 2: Starter Grants Proposal

#### Title
**Proposal Title: Augmenting O1JS TypeScript npm Test Job with Performance Recording and Function-Level Profiling**

#### Project Background
The project aims to enhance the testing infrastructure of a TypeScript application by integrating performance recording and function-level profiling within a Docker container started by Docker Compose in github actions. This will enable developers to identify performance bottlenecks and optimize their code more effectively with no setup costs. The current setup involves running tests using npm, but lacks detailed performance insights. This proposal seeks to address this gap by leveraging profiling tools like linux `perf` for os level and later `clinic` for javascript level profiling.

#### Proposal Overview
**Problem:** The current testing setup lacks detailed performance insights, making it difficult to identify and address performance bottlenecks.

**Solution:** Integrate performance recording and function-level profiling using `perf` and `clinic` within the Docker container started by Docker Compose in a github action.

**Impact:** This proposal will significantly enhance the Mina ecosystem by providing developers with improved tools for performance analysis, encouraging adoption, and attracting more users and developers. It will enable novel applications by facilitating better performance optimization.

**Audience:** The target audience for this project includes developers and teams working on TypeScript applications within the Mina ecosystem.

#### Architecture & Design
**Detailed Design/Architecture:**
The proposed solution involves updating the Dockerfile to install necessary profiling tools, modifying the Docker Compose configuration to include profiling commands, updating test scripts to run with profiling, collecting the results, processing the results, publishing the results, collecting multiple results in aggregate, processing those results again.

1. **Status update:**
We have already created a dockerfile for o1js and demonstrated that we can collect strace, run clinic and linux perf.
The docker compose runs in a github action, and we upload those results to github artifacts currently with plans to upload them to huggging face and archive.org and ipfs etc.

**Vision:** The long-term vision for this project is to create a robust testing framework that provides detailed performance insights, enabling developers to build highly optimized applications within the Mina ecosystem.
It also will help extract knowledge from the o1js codebase for the following step, providing valuable intermediates,
currently the performance of mina suffers from lack of key insights into where the performance is going.
The introspective method of observing runtime and using this to drive attention to code changes is a forward thinking
tactic. 

**Existing Work:** 

https://github.com/meta-introspector/o1js/ This run demonstrates
the running of part of the o1js test framework in github and collecting performance traces.

**Production Timeline:** 

The project is expected to be in production in one month.

#### Budget & Milestones

**Deliverables:**
- O1JS Dockerfile with profiling tools installed being delivered to github image repository ghcr
- Modified Docker Compose configuration to include profiling commands, and reporting commands
- Updated test scripts to run with profiling.
- Documentation on how to use the profiling tools.

**Mid-Point Milestones:**
- Completion of Dockerfile and Docker Compose updates.
- Initial testing of profiling setup.
- Preliminary documentation.
- Analysis of reports
- Publishing of reports, splitting into smaller chunks
- Automating of reporting, review of other reporting tools
- Adjustments to collection parameters

**Project Timeline:** 1M

**Budget Requested:** 

4 * 40 Hours * 100 MINA = 16000 MINA + 4000 MINA Contingency

**Budget Breakdown:**
- Development: 10,000 MINA
- Testing and QA: 10,000 MINA
- Reporting: 10,000 MINA
- Documentation: 6,000 MINA
- Contingency: 4,000 MINA

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
- Created github framework for running pipelines of docker compose 

#### Risks & Mitigations
**Risks:**
- Integration issues with clincjs profiling and jest testing tools.

This has been a major issue with getting clinic to play nice with jest.
Because of that we pivoted to linux perf.

- Performance overhead introduced by profiling.
- Getting debug symbols from remote machine
- Delivery of the results to user

**Mitigations:**
- Pivoting to perf profile and then back to clinc js
- Thorough testing and validation of profiling tools. 
- Usage of perf archive to pack up symbols
- Optimization of profiling setup to minimize performance impact.
- Regular communication with the community for feedback and support.
- Usage of accepted and standard tools for profiling nodejs
