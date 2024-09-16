## References 

### Price 

#### ZKapp Fees

https://minascan.io/mainnet/tx/5JvQTouheGHgZMZzHPWS8UowkHcm6zUMV62qitynL63JuYtBnbLb/txInfo

Looking at some existing contracts, the fee is defined in nanomina like this 
`const fee = Number(config.fee) * 1e9; // in nanomina (1 billion = 1.0 mina)`
so some have      `fee: 1e8,` for 1/10 of a mina.

others define the fee to be 1 mina or more. 
