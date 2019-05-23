import {Command, flags} from '@oclif/command'

export default class Flipper extends Command {
  static description = 'Takes a single argument as a string and flips its case.';
  static strict = false;

  static examples = [
    '$ unicron flipper low \nLOW\n',
    '$ unicron flipper HIGH \nhigh\n',
    '$ unicron flipper "a SENTENCE" \nA sentence\n',
    '$ unicron flipper woweEeEe \nWOWEeEeE\n',
    '$ unicron flipper multiple strings "to INVERT" \nMULTIPLE\nSTRINGS\nTO invert',
  ];

  static flags = {
    help: flags.help({ char: 'h' }),
  }

  isLowerCase(character: string): boolean {
    return character === character.toLowerCase();
  }

  flipCase(toFlip: string): string {
    let flippedCase = '';
    for (let i = 0; i < toFlip.length; i++) {
      if (this.isLowerCase(toFlip[i])) {
        flippedCase += toFlip[i].toUpperCase();
      } else {
        flippedCase += toFlip[i].toLowerCase();
      }
    }
    return flippedCase
  }

  async run() {
    const {argv} = this.parse(Flipper);

    argv.forEach((stringToFlip: string) => {
      this.log(this.flipCase(stringToFlip));
    })
  }
}
