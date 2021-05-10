import { IDisplayOption } from '../../../src/interfaces/iview.interface';
import { IFactoryOption } from '../../../src/interfaces/response.service.interface';
import {
  FibService,
  HaltService,
  InitService,
  CommonService,
  ResumeService,
  ForceQuitService,
  QuitAlertService,
} from '../../../src/services/common/nodes.services';

describe('response factory nodes', () => {
  describe('fib service', () => {
    let _fibService = new FibService();
    let output = { display: ['FIB'], tips: 'Please enter the next number' };
    test('fib service should return FIB', () => {
      let factoryOption: IFactoryOption = { value: '0' };
      expect(_fibService.getResponseOption(factoryOption)).toMatchObject(
        output
      );
    });
    test('fib service should not return FIB', () => {
      let factoryOption: IFactoryOption = { value: '4' };
      expect(_fibService.getResponseOption(factoryOption)).toMatchObject({
        tips: 'Please enter the next number',
      });
    });
  });
});
