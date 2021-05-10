import { IDisplayOption } from './iview.interface';

export interface IResponseService {
  getResponse: (string) => IDisplayOption;
  init: () => IDisplayOption;
  getSortedInput: () => string;
  timerInterval: number;
}

export interface IFactoryOption {
  value?: string;
  isSetInterval?: boolean;
  display?: Array<string>;
  sortedListSequence?: string;
  forceQuit?: boolean;
}

export interface INodeCondition {
  getResponseOption: (factoryOption: IFactoryOption) => IDisplayOption;
}
