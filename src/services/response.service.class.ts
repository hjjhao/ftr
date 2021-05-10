import {
  IResponseService,
  IFactoryOption,
} from '../interfaces/response.service.interface';
import { IView, IDisplayOption } from '../interfaces/iview.interface';
import { OptionsFactory } from './common/factory.service';

export class ResponseService implements IResponseService {
  private _optionFactory = new OptionsFactory();
  private _forceQuit: boolean = false;
  inputList: { number: number; frequency: number }[] = [];
  timerInterval: number = 0;

  getResponse(value?: string) {
    let factoryOption: IFactoryOption = {
      value,
      sortedListSequence: this.getSortedInput(),
      forceQuit: this._forceQuit,
      isSetInterval: !this.timerInterval,
    };
    if (Number(value) && this.timerInterval) {
      this.updateNumber(Number(value));
    }
    if (Number(value) && !this.timerInterval) {
      this.timerInterval = Number(value);
    }

    if (value == 'quit') {
      this._forceQuit = true;
    }

    return this._optionFactory
      .createResponseService(factoryOption)
      .getResponseOption(factoryOption);
  }

  getSortedInput(): string {
    return this.inputList
      .sort((a, b) => b.frequency - a.frequency)
      .map((item) => `${item.number}:${item.frequency}`)
      .join(' ');
  }

  updateNumber(num) {
    let index = this.inputList.findIndex((item) => item.number == num);
    if (index != -1) this.inputList[index].frequency++;
    else this.inputList.push({ number: num, frequency: 1 });
  }

  /**
   * On startup, the program will prompt the user for the number of seconds (X) between outputting the frequency of each number to the screen.
   *
   * @returns {IDisplayOption}
   * @memberof ResponseService
   */
  init(): IDisplayOption {
    return {
      tips: `Please input the amount of time in seconds between emitting numbers and their frequency`,
    };
  }
}
