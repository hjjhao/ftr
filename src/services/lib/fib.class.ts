export class Fibonacci {
  private isPerfectSquare(x: number) {
    const s: number = parseInt(Math.sqrt(x).toString());
    return s * s == x;
  }

  private memozi(fn) {
    var r = {};
    return function (n) {
      if (r[n] == null) {
        r[n] = fn(n);
        return r[n];
      } else {
        return r[n];
      }
    };
  }

  // Returns true if n is a Fibinacci Number, else false
  isFibonacci(n) {
    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perferct square
    return (
      this.isPerfectSquare(5 * n * n + 4) || this.isPerfectSquare(5 * n * n - 4)
    );
  }

  getNthFibonacci = this.memozi((n) => {
    if (n == 0) {
      return 0;
    } else if (n == 1) {
      return 1;
    } else {
      return this.getNthFibonacci(n - 1) + this.getNthFibonacci(n - 2);
    }
  });
}
