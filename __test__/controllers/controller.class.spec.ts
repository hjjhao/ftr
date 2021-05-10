import { ProgramController } from '../../src/controllers/controller.class';
import { ViewClass } from '../../src/views/view.class';
import { ResponseService } from '../../src/services/response.service.class';
import { IDisplayOption } from '../../src/interfaces/iview.interface';
import { option } from 'yargs';

describe('controller Class', () => {
  const view = new ViewClass();
  const response = new ResponseService();
  let output: IDisplayOption = {
    display: [' Please input next number'],
  };
  const programController = new ProgramController(view, response);

  test('getResponse should be called', async () => {
    jest.spyOn(response, 'getResponse').mockImplementation(() => output);
    jest
      .spyOn(ProgramController.prototype, 'init')
      .mockImplementation(async () => {
        const option: IDisplayOption = await response.getResponse('5');
      });
    const programController = new ProgramController(view, response);
    jest.spyOn(view, 'display').mockResolvedValue('5');
    expect(response.getResponse).toHaveBeenCalled();
  });
});
