unicron
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/unicron.svg)](https://npmjs.org/package/unicron)
[![Downloads/week](https://img.shields.io/npm/dw/unicron.svg)](https://npmjs.org/package/unicron)
[![License](https://img.shields.io/npm/l/unicron.svg)](https://github.com/jklotz1/unicron/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g unicron
$ unicron COMMAND
running command...
$ unicron (-v|--version|version)
unicron/0.0.0 darwin-x64 node-v8.11.4
$ unicron --help [COMMAND]
USAGE
  $ unicron COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`unicron hello [FILE]`](#unicron-hello-file)
* [`unicron help [COMMAND]`](#unicron-help-command)

## `unicron hello [FILE]`

describe the command here

```
USAGE
  $ unicron hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ unicron hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jklotz1/unicron/blob/v0.0.0/src/commands/hello.ts)_

## `unicron help [COMMAND]`

display help for unicron

```
USAGE
  $ unicron help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
