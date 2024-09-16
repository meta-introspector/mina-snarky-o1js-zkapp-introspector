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



