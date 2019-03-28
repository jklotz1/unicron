import {Command, flags} from '@oclif/command'

export default class Hello extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ unicron hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-t, --text=VALUE)
    text: flags.string({char: 't', description: 'text to print'}),
    // flag with no value (-f, --force)
    showArgs: flags.boolean({char: 's'}),
  }

  static args = [{name: 'sean'},{name: 'kirby'}]

  async run() {
    const {args, flags} = this.parse(Hello)

    const anotherText = flags.text || 'world'
    this.log(`hello ${anotherText} from ./src/commands/hello.ts`)
    if (flags.showArgs) {
      this.log(`you arguments: ${args.sean} ${args.kirby}`)
    }
  }
}
