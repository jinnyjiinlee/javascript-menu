import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';

import { CATEGORY_NUMBER, MENU_LIST } from '../Constant/constant.js';

export class OutputHandler {
  printStartMessage() {
    Console.print(`점심 메뉴 추천을 시작합니다.\n`);
  }

  printRecommendationResult(splitCoachNames, foodThatCanNotEatOfAllCoachToArray) {
    this.splitCoachNames = splitCoachNames;
    this.foodThatCanNotEatOfAllCoachToArray = foodThatCanNotEatOfAllCoachToArray;

    this.makeCategory();
    Console.print(`\n\n메뉴 추천 결과입니다.\n`);
    Console.print(`[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]`);
    Console.print(
      `[ 카테고리 | ${this.categoryNameForWeekArray[0]} | ${this.categoryNameForWeekArray[1]} | ${this.categoryNameForWeekArray[2]} | ${this.categoryNameForWeekArray[3]} | ${this.categoryNameForWeekArray[4]} ]`,
    );

    this.selectFoodMenu();

    for (let i = 0; i < splitCoachNames.length; i += 1) {
      Console.print(
        `[ ${splitCoachNames[i]} | ${this.recommendedMenuForWeekAllCoach[i][0]} | ${this.recommendedMenuForWeekAllCoach[i][1]} | ${this.recommendedMenuForWeekAllCoach[i][2]} | ${this.recommendedMenuForWeekAllCoach[i][3]} | ${this.recommendedMenuForWeekAllCoach[i][4]} ]`,
      );
    }

    Console.print(`\n추천을 완료했습니다.\n`);
  }

  shuffle = (array) => {
    const random = Math.floor(Math.random() * array.length); // 0~2 사이의 랜덤 숫자가 random에 들어간다
    return array[random]; // 0~2 사이의 랜덤 정수가 들어가서 값을 구한다
    // 만약 random 값이 2라면 'c'가 나온다
  };

  makeCategory() {
    this.selectCategoryNameForWeek();

    const unique = new Set(this.categoryNameForWeekArray);

    if (unique.size < 4) {
      this.selectCategoryNameForWeek();
    }
  }

  selectCategoryNameForWeek() {
    this.categoryNameForWeekArray = [];

    for (let i = 0; i < 5; i += 1) {
      const categoryKeyNumber = Random.pickNumberInRange(1, 5);
      this.categoryName = CATEGORY_NUMBER[categoryKeyNumber];
      this.categoryNameForWeekArray.push(this.categoryName);
    }
  }

  selectFoodMenu() {
    this.recommendedMenuForWeekEachCoach = [];
    this.recommendedMenuForWeekAllCoach = [];

    for (let i = 0; i < this.splitCoachNames.length; i += 1) {
      for (let categoryName of this.categoryNameForWeekArray) {
        const menuListArrayForCategory = MENU_LIST[categoryName].split(',');

        let checkHateFood = null;
        do {
          this.randomMenu = this.shuffle(menuListArrayForCategory);

          // 못 먹는 음식이면 push 하면 안된다.
          checkHateFood = this.foodThatCanNotEatOfAllCoachToArray[i].some(
            (hateFood) => hateFood === this.randomMenu,
          );
        } while (checkHateFood === true);
        {
        }

        this.recommendedMenuForWeekEachCoach.push(this.randomMenu);
      }

      this.recommendedMenuForWeekAllCoach.push(this.recommendedMenuForWeekEachCoach);
      this.recommendedMenuForWeekEachCoach = [];
    }

    // console.log('foodThatCanNotEatOfAllCoachToArray: ', this.foodThatCanNotEatOfAllCoachToArray);

    // console.log('recommendedMenuForWeekAllCoach: ', this.recommendedMenuForWeekAllCoach);
  }
}
