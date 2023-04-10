import PromptSync from "prompt-sync";

const prompt = PromptSync();

export class View {
  textFirstEnter: string;
  textSecondEnter: string;
  textOperatorEnter: string;
  constructor() {
    this.textFirstEnter = "Enter first value ";
    this.textSecondEnter = "Enter Second value ";
    this.textOperatorEnter = "Enter operator (+,-,*,/)  ";
  }

  getInputs() {
    const firstValue = prompt(this.textFirstEnter);
    const operator = prompt(this.textOperatorEnter);
    const secondValue = prompt(this.textSecondEnter);
    return { firstValue, operator, secondValue };
  }

  logFirstEnter() {
    console.log(this.textFirstEnter);
  }

  logOperatorEnter() {
    console.log(this.textOperatorEnter);
  }

  logSecondEnter() {
    console.log(this.textSecondEnter);
  }

  logResult(result: string | number) {
    console.log(result);
  }

  logErrorDivideByZero() {
    console.log("Result not a number, cannot divide by zero");
  }
  logErrorInvalidOperator() {
    console.log("Invalid");
  }
}
