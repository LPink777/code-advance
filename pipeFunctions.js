const pipeFunctions = (...fns) => fns.reduce(
  (f, g) => (...args) => g(f(...args))
)

const pipeFunctions1 = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

const add5 = x => x + 5;
const add8 = x => x + 8;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
const s = multiplyAndAdd5(5, 2); // 15
console.log('s', s);
