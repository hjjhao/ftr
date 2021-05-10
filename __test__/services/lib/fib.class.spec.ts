import { Fibonacci } from '../../../src/services/lib/fib.class';

describe('Fibonacci Class', () => {
  const fib = new Fibonacci();
  test('isFibonacci work well', () => {
    expect(fib.isFibonacci(1)).toBe(true);
    expect(fib.isFibonacci(10)).toBe(false);
  });
  test('getNthFibonacci should return nth fibonacci number correctly', () => {
    expect(fib.getNthFibonacci(10)).toBe(55);
    expect(fib.getNthFibonacci(20)).toBe(6765);
  });
});
