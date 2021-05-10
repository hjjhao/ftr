import {
  FibService,
  QuitAlertService,
  ResumeService,
  HaltService,
  InitService,
  ForceQuitService,
  CommonService,
} from './nodes.services';
import { IFactoryOption } from '../../interfaces/response.service.interface';

export class OptionsFactory {
  createResponseService(option?: IFactoryOption) {
    if (option.forceQuit) return new ForceQuitService();
    if (option.value == 'quit') return new QuitAlertService();
    if (option.value == 'halt') return new HaltService();
    if (option.value == 'resume') return new ResumeService();
    if (Number(option.value) && option.isSetInterval) return new InitService();
    if (Number(option.value) && !option.isSetInterval) return new FibService();
    return new CommonService();
  }
}
