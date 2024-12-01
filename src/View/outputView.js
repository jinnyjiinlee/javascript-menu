import { Console } from '@woowacourse/mission-utils';
import { Random } from '@woowacourse/mission-utils';
import { MENU_LIST } from '../Constant/constant.js';

export class OutputHandler {
  constructor() {
    this.CATEGORY_NUMBER = {
      1: '일식',
      2: '한식',
      3: '중식',
      4: '아시안',
      5: '양식',
    };
  }

  shuffle = (array) => {
    const random = Math.floor(Math.random() * array.length); // 0~2 사이의 랜덤 숫자가 random에 들어간다
    return array[random]; // 0~2 사이의 랜덤 정수가 들어가서 값을 구한다
    // 만약 random 값이 2라면 'c'가 나온다
  };

  printStartMessage() {
    Console.print(`점심 메뉴 추천을 시작합니다.\n`);
  }

  printRecommendationResult() {
    this.makeRandom();
    Console.print(`메뉴 추천 결과입니다.\n`);
    Console.print(`[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]`);
    Console.print(
      `[ 카테고리 | ${this.categoryNameForWeekArray[0]} | ${this.categoryNameForWeekArray[1]} | ${this.categoryNameForWeekArray[2]} | ${this.categoryNameForWeekArray[3]} | ${this.categoryNameForWeekArray[4]} ]`,
    );
  }

  makeRandom() {
    // 월요일에 추천할 메뉴 카테고리를 무작위로 정한다.
    // 예시 코드. 사용하는 자료 구조에 따라 난수를 적절하게 가공해도 된다.

    this.makeCategoryNameForWeek();

    const unique = new Set(this.categoryNameForWeekArray);

    if (unique.size < 4) {
      this.makeCategoryNameForWeek();
    }

    // 한식 음식 종류
    // const menuListArrayForCategory = MENU_LIST[categoryName].split(',');
    // console.log('menuListArrayForCategory: ', menuListArrayForCategory);

    // const randomMenu = this.shuffle(menuListArrayForCategory);

    // console.log('randomMenu: ', randomMenu);

    // 그럼 categoryName 이거대로 각 코치들이 먹을 메뉴를 추천해야 된다.

    // Console.print(`[ ${coachName} | ${Menu} | ${Menu} | ${Menu} | ${Menu} | ${Menu} ]`);

    // Console.print(`추천을 완료했습니다.\n`);
  }

  makeCategoryNameForWeek() {
    this.categoryNameForWeekArray = [];

    for (let i = 0; i < 5; i += 1) {
      const categoryKeyNumber = Random.pickNumberInRange(1, 5);
      const categoryName = this.CATEGORY_NUMBER[categoryKeyNumber];
      this.categoryNameForWeekArray.push(categoryName);
    }
  }
}
