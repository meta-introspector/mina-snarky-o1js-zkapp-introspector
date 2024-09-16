## Steps

### Run o1js build in docker
### Capture runtime of execution of program in docker
### Extract runtime data in hash for zk-snarks.

### Create Mina Build Variables ZKApp

Add MINA wallet plugin to your existing github/gitlab account to
create a private mina wallet for your project itself that
lives in your project secrets. It will need access to your account to create secrets.
This zkapp will allow you to create new wallets in your account.
There will be different onboarding schemes for this: 

#### Web Page agent
Enter in your private credentials into parameters of a wasm binary 
that runs in your browser and requests the access for you.

#### Command line program

Enter in your private credentials into parameters of a rust or typescript program
that runs in your computer and requests the access for you.

#### Generate instructions for a human

Generate a list of instructions for a human to navigate the website and setup the
credentials manually

#### Github plugin

Create a github plugin or gitlab equivalent that is an app you can grant access to your account.

### Create Mina Protected Blockchain. 

Add MINA test net plugin to your existing github account to
create a mina test network and token for your project itself that
lives in your git repo and runs on commit to update it knowledge
arguments and polynomial commitments about your commits and code.
This protected blockchain will live in your account and the keys will be written to secured storage.

### Expose build job on protected blockchain 

Add Mina expose build job plugin to your existing github
action and turn your deployment job into a zkapp that is resellable.

This requires an external runner to call it from outside, because it will only be runnable from the caller job.
The runner will use the protected blockchain and write its results to the private storage.

### Caller Job: Create Web Function to call Expose build job on blockchain

Add Mina expose build job plugin to your existing github
action and turn your deployment job into a zkapp that is resellable.

### Expose Webapp plugin

Add Mina expose webapp second level plugin to your existing
github deploy action and turn your deployment resulting system into a
zkapp that is resellable.

### Attach AI agent
Use your favorite ai agent in a docker container in a github action
to execute on comment and have it have its own wallet and use other resources and pay for them 
in the different mina network tokens you hold.

### Index git repos and submodules
We can search and index git repos and construct arguments of knowledge about them as owners or users
and publish those in github and find them. We can condense existing git repos and reduce their size, removing blobs or replacing them with descriptors. This will let us search those repos for things. 
You can collect the zkps from your submodules and summarize them into your main project.

### Create type system
We can create a set of types and instances as prime numbers.
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

### Create donation and faucet pages

#### Create donation page for each project 

To allow for donations. this will run on github pages or gitlab pages.

