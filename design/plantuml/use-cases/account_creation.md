## Plant UML Diagrams

### Sequence Diagrams

#### Timeline

Users purchase a mina account for 1 mina, and deposits 1 more mina to pay for fees.

With account A, user registers ZK App Z1 for 0.1 mina fee.

https://docs.minaprotocol.com/zkapps/writing-a-zkapp/introduction-to-zkapps/how-to-deploy-a-zkapp

@startuml
actor Developer
actor GitLabCI as GL
actor MinaBlockchain as MB

Developer -> GL: Add MINA plugin to GitLab CI
GL -> Developer: Plugin added, create MINA account and token
Developer -> MB: Request to create MINA test network and token
MB -> Developer: MINA account and token created

Developer -> GL: Add MINA expose build job plugin to GitLab pipeline
GL -> MB: Trigger zkApp deployment job
MB -> GL: zkApp deployed, zkSNARK generated

Developer -> GL: Add MINA expose webapp plugin to deploy action
GL -> MB: Trigger zkApp deployment on GitLab CI job completion
MB -> Developer: zkApp deployment verified and resellable

Developer -> MB: Use AI agent to execute on GitLab job completion
MB -> GL: AI agent executed, resources paid in MINA tokens
@enduml
