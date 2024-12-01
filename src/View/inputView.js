import { Console } from '@woowacourse/mission-utils';
import { CoachNames } from '../Validation/coachNamesValidator.js';
import { splitCoachNamesToArray } from '../Utils/coachNamesSplit.js';

export class InputHandler {
  // async getCoachNamesInput() {
  //   return await Console.readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)\n');
  // }

  // async validateCoachNames(splitCoachNames) {
  //   let isValid = false;
  //   while (!isValid) {
  //     try {
  //       isValid = new CoachNames(splitCoachNames);
  //       return splitCoachNames;
  //     } catch (e) {
  //       Console.print(e.message);
  //     }
  //   }
  // }

  async getCoachNamesInput() {
    let isValid = false;
    while (!isValid) {
      try {
        const coachNames = await Console.readLineAsync(
          '코치의 이름을 입력해 주세요. (, 로 구분)\n=> ',
        );

        const splitCoachNames = splitCoachNamesToArray(coachNames);

        isValid = new CoachNames(splitCoachNames);
        return coachNames;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }
}
