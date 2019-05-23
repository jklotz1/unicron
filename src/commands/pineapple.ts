import {Command, flags} from '@oclif/command'

export default class Pineapple extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ unicron pineapple "show me the pinapple"
show me the 🍍
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static strict = false

  async run() {
    const {argv} = this.parse(Pineapple)

    // this.log(argv);

    const newText = [];

    for (let i of argv) {
      if (i.toLowerCase() == "pineapple") {
        newText.push("🍍")
      } else {
        newText.push(i)
      }
   }

    const text = newText.join(' ');

    this.log(text);
  }
}
