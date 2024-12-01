import { ERROR_MESSAGES } from '../Constant/errorMessages.js';

export class FoodThatCanNotEat {
  constructor(foodThatCanNotEat) {
    this.validate(foodThatCanNotEat);
  }

  isNotCount(value) {
    return value.length < 0 || value.length > 3;
  }

  // isNotNumberOfLetters(value) {
  //   return value.some((coachName) => coachName.length < 2 || coachName.length > 4);
  // }

  validate(foodThatCanNotEat) {
    if (this.isNotCount(foodThatCanNotEat)) {
      throw new Error('못 먹는 음식은 2개 이하로 적어주세요.\n');
    }

    // if (this.isNotNumberOfLetters(foodThatCanNotEat)) {
    //   throw new Error('코치 이름의 길이가 2글자 이상 4글자 이하가 아닙니다.\n');
    // }
  }
}
