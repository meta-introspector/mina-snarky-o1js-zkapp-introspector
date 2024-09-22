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

Detailed Design:
1. Perf Integration:
   - Implement a lightweight perf recording mechanism around o1js without changing it
   - Future: Implement a lightweight perf recording mechanism within o1js
   - Future: Create hooks to start/stop perf recording programmatically
   - Develop a module to parse and analyze perf data
   - Publish and report and reprocess perf data in aggregate
   - Future: Share the work of performance profiling with users and have them share results

2. Function-Level Profiling:
   - Use perf recording of entire test runs and collect function information with stacktraces
   - future : Implement function entry/exit instrumentation in o1js compiler
   - Create a profiling runtime to collect timing and call count data
   - Develop visualization tools for function-level performance data

3. Integration with Existing Tools:
   - Publish Reports as static HTML on github pages and hugging face datasets
   - Implement CI/CD integration for automated performance regression testing

4. Documentation and Examples:
   - Develop comprehensive documentation on using the new profiling features
   - Create example projects demonstrating performance optimization techniques
   - Publish datasets with hugging face 
   - Publish datasets with github artifacts
   - Publish datasets with IPFS/Filecoin 

**Vision:** The long-term vision for this project is to create a robust testing framework that provides detailed performance insights, enabling developers to build highly optimized applications within the Mina ecosystem.
It also will help extract knowledge from the o1js codebase for the following step, providing valuable intermediates,
currently the performance of mina suffers from lack of key insights into where the performance is going.
The introspective method of observing runtime and using this to drive attention to code changes is a forward thinking
tactic. 
In the future we can reuse and or create plugins for popular IDEs (VS Code, Emacs, Vim) to visualize profiling data.
We will upload and share the reports on huggging face and archive.org and ipfs etc.

**Existing Work:** 

We have already created a dockerfile for o1js and demonstrated that we can collect strace, run clinic and linux perf.
The docker compose runs in a github action, and we upload those results to github artifacts 

https://github.com/meta-introspector/o1js/ This run demonstrates
the running of part of the o1js test framework in github and collecting performance traces.

**Production Timeline:** 

The project is expected to be in production in one month.

#### Budget & Milestones

**Deliverables:**
- O1JS Dockerfile with profiling tools installed being delivered to github image repository ghcr
- Modified Docker Compose configuration to include profiling commands, and reporting commands
- Perf recording integration in o1js
- Function-level profiling implementation
- CI/CD integration
- Comprehensive documentation and examples

**Futures:**
- IDE plugins
Integeration with https://profiler.firefox.com/

**Mid-Point Milestones:**
- Completion of Dockerfile and Docker Compose updates.
- Initial testing of profiling setup.
- Preliminary documentation.
- Analysis of reports
- Publishing of reports, splitting into smaller chunks
- Automating of reporting, review of other reporting tools,
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
The profiling collection has been ok, but reporting on the data has been a problem.

- Getting debug symbols from remote machine

- Delivery of the results to user


**Mitigations:**
- Pivoting to perf profile and then back to clinc js
- Usage of perf archive to pack up symbols
- Optimization of profiling setup to minimize performance impact.
- Regular communication with the community for feedback and support.
- Usage of accepted and standard tools for profiling nodejs
