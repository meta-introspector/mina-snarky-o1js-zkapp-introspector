### Navigators Season 2: Growth Grants Proposal 

#### Title
**Proposal Title: Augmenting O1JS TypeScript npm Test Job with Performance Recording and Function-Level Profiling**

#### Project Background
The project aims to enhance the testing infrastructure of a TypeScript application by integrating performance recording and function-level profiling within a Docker container started by Docker Compose. This will enable developers to identify performance bottlenecks and optimize their code more effectively. The current setup involves running tests using pnpm, but lacks detailed performance insights. This proposal seeks to address this gap by leveraging profiling tools like `clinic`.

For more information, you can refer to the project documentation [here](#).

#### Proposal Overview
**Problem:** The current testing setup lacks detailed performance insights, making it difficult to identify and address performance bottlenecks.

**Solution:** Integrate performance recording and function-level profiling using `clinic` within the Docker container started by Docker Compose.

**Impact:** This proposal will significantly enhance the Mina ecosystem by providing developers with improved tools for performance analysis, encouraging adoption, and attracting more users and developers. It will enable novel applications by facilitating better performance optimization.

**Audience:** The target audience for this project includes developers and teams working on TypeScript applications within the Mina ecosystem.

#### Architecture & Design
**Detailed Design/Architecture:**
The proposed solution involves updating the Dockerfile to install necessary profiling tools, modifying the Docker Compose configuration to include profiling commands, and updating test scripts to run with profiling.

1. **Dockerfile Update:**
   ```Dockerfile
   FROM node:14
   WORKDIR /usr/src/app
   COPY package*.json ./
   RUN npm install -g pnpm
   RUN pnpm install
   RUN npm install -g clinic
   COPY . .
   EXPOSE 3000
   CMD ["pnpm", "start"]
   ```

2. **Docker Compose Update:**
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       command: pnpm test
       volumes:
         - .:/usr/src/app
         - /usr/src/app/node_modules
         - ./profiling-data:/usr/src/app/profiling-data
       environment:
         - NODE_ENV=development
       ports:
         - "3000:3000"
       depends_on:
         - db

     db:
       image: postgres:13
       environment:
         POSTGRES_USER: user
         POSTGRES_PASSWORD: password
         POSTGRES_DB: mydatabase
       ports:
         - "5432:5432"
   ```

3. **Test Script Update:**
   ```json
   {
     "scripts": {
       "test": "pnpm run test:profile",
       "test:profile": "clinic doctor -- pnpm run test:original",
       "test:original": "mocha"
     }
   }
   ```

**Vision:** The long-term vision for this project is to create a robust testing framework that provides detailed performance insights, enabling developers to build highly optimized applications within the Mina ecosystem.

**Existing Work:** If applicable, please provide a link to the GitHub repository.

**Production Timeline:** The project is expected to be in production within 2 months.

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

**Project Timeline:** 1M - 3M

**Budget Requested:** Up to 100,000 MINA

**Budget Breakdown:**
- Development: 60,000 MINA
- Testing and QA: 20,000 MINA
- Documentation: 10,000 MINA
- Contingency: 10,000 MINA

**Wallet Address:** [MINA Wallet address for funding. Please ensure to use the same wallet used during the KYC process.]

#### Team Info
**Proposer Github:** [GitHub Profile Link]

**Proposer Experience:** The proposer has experience building zkApps and other dApps. Relevant projects include [Project 1](#), [Project 2](#).

**Team Members:**
- **Member 1:** Role - Lead Developer, Experience - [Relevant Experience], GitHub - [GitHub Profile Link]
- **Member 2:** Role - QA Engineer, Experience - [Relevant Experience], GitHub - [GitHub Profile Link]

**Achievements:**
- Successfully developed and deployed [Project 1].
- Contributed to the open-source community with [Project 2].

#### Risks & Mitigations
**Risks:**
- Integration issues with profiling tools.
- Performance overhead introduced by profiling.

**Mitigations:**
- Thorough testing and validation of profiling tools.
- Optimization of profiling setup to minimize performance impact.
- Regular communication with the community for feedback and support.
