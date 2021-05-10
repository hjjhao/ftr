import {
  INodeCondition,
  IFactoryOption,
} from '../../interfaces/response.service.interface';
import { IDisplayOption } from '../../interfaces/iview.interface';
import { Fibonacci } from '../lib/fib.class';
import { OptionsFactory } from './factory.service';

export class FibService implements INodeCondition {
  private _fibinacci = new Fibonacci();
  private maxValue = this._fibinacci.getNthFibonacci(1000);
  getResponseOption(factoryOption: IFactoryOption): IDisplayOption {
    let options: IDisplayOption = { tips: 'Please enter the next number' };
    if (
      this._fibinacci.isFibonacci(factoryOption.value) &&
      factoryOption.value < this.maxValue
    )
      options.display = ['FIB'];
    return options;
  }
}

export class QuitAlertService implements INodeCondition {
  getResponseOption(factoryOption: IFactoryOption): IDisplayOption {
    const responseOption: IDisplayOption = {
      display: [factoryOption.sortedListSequence],
      tips: 'Thanks for playing, press any key to exit',
      action: 'haltTimer',
    };

    return responseOption;
  }
}

export class HaltService implements INodeCondition {
  getResponseOption(factoryOption: IFactoryOption): IDisplayOption {
    return {
      display: ['timer halted'],
      action: 'haltTimer',
      tips: `Please enter the next number`,
    };
  }
}

export class ResumeService implements INodeCondition {
  getResponseOption(factoryOption: IFactoryOption): IDisplayOption {
    return {
      display: ['timer resumed'],
      action: 'setTimer',
      tips: `Please enter the next number`,
    };
  }
}

export class InitService implements INodeCondition {
  getResponseOption(factoryOption: IFactoryOption): IDisplayOption {
    return { tips: `Please enter the next number`, action: 'setTimer' };
  }
}

export class ForceQuitService implements INodeCondition {
  getResponseOption(factoryOption: IFactoryOption): IDisplayOption {
    return { action: 'exit' };
  }
}

export class CommonService implements INodeCondition {
  getResponseOption(factoryOption: IFactoryOption): IDisplayOption {
    return { tips: `Please enter the next number` };
  }
}
