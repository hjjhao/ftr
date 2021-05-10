import { ResponseService } from '../../src/services/response.service.class';

describe('Response service Class', () => {
  test('init should return ', () => {
    const fib = new ResponseService();
    expect(fib.init()).toMatchObject({
      tips: `Please input the amount of time in seconds between emitting numbers and their frequency`,
    });
  });
  test('getSortedInput should return a sting of sorted input list', () => {
    const fib = new ResponseService();
    fib.inputList = [
      { number: 10, frequency: 3 },
      { number: 5, frequency: 6 },
    ];
    expect(fib.getSortedInput()).toEqual('5:6 10:3');
  });

  test('getResponse should return setTimer when timeInterval is null', () => {
    const fib = new ResponseService();

    expect(fib.getResponse('10')).toMatchObject({
      tips: `Please enter the next number`,
      action: 'setTimer',
    });
  });

  test('getResponse should return exit on quit', () => {
    const fib = new ResponseService();
    fib.timerInterval = 10;
    expect(fib.getResponse('quit')).toMatchObject({ action:'haltTimer' });
  });
});
