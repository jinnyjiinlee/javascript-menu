import { Console } from '@woowacourse/mission-utils';
import { CoachNames } from '../Validation/coachNamesValidator.js';
import { FoodThatCanNotEat } from '../Validation/foodThatCanNotEatValidator.js';

import { splitValuesToArray } from '../Utils/coachNamesSplit.js';

export class InputHandler {
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

  // eslint-disable
  async getFoodThatCanNotEatInput(splitCoachNames) {
    const foodThatCanNotEatOfAllCoachToArray = [];

    for (const coachName of splitCoachNames) {
      let isValid = false;
      while (!isValid) {
        try {
          const foodThatCanNotEat = await Console.readLineAsync(
            `\n${coachName}(이)가 못 먹는 메뉴를 입력해 주세요.\n=> `,
          );
          const splitFoodThatCanNotEat = splitValuesToArray(foodThatCanNotEat);

          isValid = new FoodThatCanNotEat(splitCoachNames);
          foodThatCanNotEatOfAllCoachToArray.push(splitFoodThatCanNotEat);
        } catch (e) {
          Console.print(e.message);
        }
      }
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
