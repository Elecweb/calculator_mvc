import { View } from "./view";
import { IModel, Model, Model2, ModelError } from "./model";

class Controller {
  View: View;
  Model: IModel;
  constructor(View: View, Model: IModel) {
    this.View = View;
    this.Model = Model;
  }

  execute() {
    const { firstValue, operator, secondValue } = this.View.getInputs();
    try {
      const results = this.Model.getResult(
        Number(firstValue),
        Number(secondValue),
        operator
      );
      this.View.logResult(results);
    } catch (err) {
      if (err.message == ModelError.INVALID_OPERATOR) {
        this.View.logErrorInvalidOperator();
      } else if (err.message == ModelError.DIVIDE_BY_ZERO) {
        this.View.logErrorDivideByZero();
      }
    }
  }
}

const view = new View();
const model = new Model2();

const calculator = new Controller(view, model);

calculator.execute();
