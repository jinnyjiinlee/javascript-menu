import { ERROR_MESSAGES } from '../Constant/errorMessages.js';

export class CoachNames {
  constructor(coachNames) {
    this.validate(coachNames);
  }

  isBlank(value) {
    return value[0] === '';
  }

  isNotCount(value) {
    return value.length < 2 || value.length > 5;
  }

  isNotNumberOfLetters(value) {
    return value.some((coachName) => coachName.length < 2 || coachName.length > 4);
  }

  validate(coachNames) {
    if (this.isBlank(coachNames)) {
      throw new Error(ERROR_MESSAGES.COMMON.BLANK);
    }

    if (this.isNotCount(coachNames)) {
      throw new Error('코치 이름이 2명 이상 5명 이하가 아닙니다.\n');
    }

    if (this.isNotNumberOfLetters(coachNames)) {
      throw new Error('코치 이름의 길이가 2글자 이상 4글자 이하가 아닙니다.\n');
    }
  }
}
