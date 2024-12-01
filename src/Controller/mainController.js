import { InputHandler } from '../View/inputView.js';
import { OutputHandler } from '../View/outputView.js';

export class MainController {
  constructor() {
    this.input = new InputHandler();
    this.output = new OutputHandler();
  }

  async startProgram() {
    this.output.printStartMessage();
    const splitCoachNames = await this.input.getCoachNamesInput();
    
    const foodThatCanNotEatOfAllCoachToArray = await this.input.getFoodThatCanNotEatInput(splitCoachNames);

    // 각 코치별 못 먹는 메뉴 입력 받기
  }
}
