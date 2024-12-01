import { InputHandler } from '../View/inputView.js';
import { OutputHandler } from '../View/outputView.js';

import { splitCoachNamesToArray } from '../Utils/coachNamesSplit.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }

  async startProgram() {
    this.output.printStartMessage();

    const coachNames = await this.input.getCoachNamesInput();
    const splitCoachNames = splitCoachNamesToArray(coachNames);
    
    console.log('splitCoachNames: ', splitCoachNames);
  }
}
