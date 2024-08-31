# Mina zkApp: Zkapp Introspector

This template uses TypeScript.

## How to build

```sh
npm run build
```

## How to run tests

```sh
npm run test
npm run testw # watch mode
```

## How to run coverage

```sh
npm run coverage
```

## License

[AGPL3](LICENSE)

# Prepare data

```
 cd build/src/
 /usr/local/bin/node ./test_compile.js 
 jq . report1.json > report_example.json
```

Using a modified version o1js_node.bc.cjs you can find here https://github.com/meta-introspector/mina-snarky-o1js-zkapp-introspector/blob/main/contracts/o1js_node.bc.cjs

Basically I added this print to the function caml_pasta_fp_plonk_circuit_serialize
```js
function caml_pasta_fp_plonk_circuit_serialize (public_input_size,gate_vector)
{
	let foo =     plonk_wasm.caml_pasta_fp_plonk_circuit_serialize(public_input_size,gate_vector);
console.warn("caml_pasta_fp_plonk_circuit_serialize",foo);
	return caml_string_of_jsstring(plonk_wasm.caml_pasta_fp_plonk_circuit_serialize(public_input_size,gate_vector)
	)
}
```

You can find the output here:
https://github.com/meta-introspector/mina-snarky-o1js-zkapp-introspector/blob/main/contracts/report_example.json
