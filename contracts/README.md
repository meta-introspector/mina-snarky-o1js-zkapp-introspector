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


NODE_V8_COVERAGE=coverage make

/usr/local/bin/node --prof /usr/local/bin/npm run test

/usr/local/bin/node --trace-event-categories node,node.async_hooks,node.bootstrap,node.console,node.dns.native,node.environment,node.fs.async,node.fs.sync,node.fs_dir.async,node.fs_dir.sync,node.http,node.module_timer,node.net.native,node.perf,node.perf.timerify,node.perf.usertiming,node.promises.rejections,node.threadpoolwork.async,node.threadpoolwork.sync,node.vm.script,v8 --trace /usr/local/bin/npm run test > runtrace.txt


 node --trace ./build/src/Add.js > add.trace
 
 
 /usr/local/bin/node --trace-event-categories node,node.async_hooks,node.bootstrap,node.console,node.dns.native,node.environment,node.fs.async,node.fs.sync,node.fs_dir.async,node.fs_dir.sync,node.http,node.module_timer,node.net.native,node.perf,node.perf.timerify,node.perf.usertiming,node.promises.rejections,node.threadpoolwork.async,node.threadpoolwork.sync,node.vm.script,v8 --trace ./build/src/Add.js > add.trace2
