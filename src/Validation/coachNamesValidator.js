import { ERROR_MESSAGES } from '../Constant/errorMessages.js';

export class CoachNames {
  constructor(coachNames) {
    this.validate(coachNames);
  }

  isBlank(value) {
    return value === '';
  }

  isNotNumber(value) {
    return Number.isNaN(Number(value));
  }

  isNotUnit(value) {
    return value % 1000 !== 0;
  }

  validate(coachNames) {
    if (this.isBlank(coachNames)) {
      throw new Error(ERROR_MESSAGES.COMMON.BLANK);
    }

    // if (this.isNotNumber(coachNames)) {
    //   throw new Error(ERROR_MESSAGES.COMMON.NOT_NUMBER);
    // }

    // if (this.isNotUnit(coachNames)) {
    //   throw new Error(ERROR_MESSAGES.PURCHASE_PRICE.NOT_UNIT);
    // }
  }
}