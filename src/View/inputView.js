import { Console } from '@woowacourse/mission-utils';
import { CoachNames } from '../Validation/coachNamesValidator.js';
import { splitValuesToArray } from '../Utils/coachNamesSplit.js';

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
        const splitCoachNames = splitValuesToArray(coachNames);
        isValid = new CoachNames(splitCoachNames);
        return splitCoachNames;
      } catch (e) {
        Console.print(e.message);
      }
    }
  }

  async getFoodThatCanNotEatInput(splitCoachNames) {
    const foodThatCanNotEatOfAllCoachToArray = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const coachName of splitCoachNames) {
      const foodThatCanNotEat = await Console.readLineAsync(
        `${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n=> `,
      );
      const splitFoodThatCanNotEat = splitValuesToArray(foodThatCanNotEat);

      foodThatCanNotEatOfAllCoachToArray.push(splitFoodThatCanNotEat);
    }

    return foodThatCanNotEatOfAllCoachToArray;
  }

  // async getFoodThatCanNotEatInput() {
  //   let isValid = false;
  //   while (!isValid) {
  //     try {
  //       const foodThatCanNotEat = await Console.readLineAsync(
  //         '`${코치 이름}(이)가 못 먹는 메뉴를 입력해 주세요.\n=> ',
  //       );
  //       const splitCoachNames = splitValuesToArray(coachNames);
  //       isValid = new CoachNames(splitCoachNames);
  //       return foodThatCanNotEat;
  //     } catch (e) {
  //       Console.print(e.message);
  //     }
  //   }
  // }
}
