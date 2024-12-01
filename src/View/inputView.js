import { Console } from '@woowacourse/mission-utils';
import { CoachNames } from '../Validation/coachNamesValidator.js';

export class InputHandler {

  async getCoachNamesInput() {
    let isValid = false;
    while (!isValid) {
      try {
        const coachNames = await Console.readLineAsync(
          '코치의 이름을 입력해 주세요. (, 로 구분)\n',
        );
        // isValid = new CoachNames(coachNames);
        return coachNames;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

}
