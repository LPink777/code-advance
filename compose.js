const compose = (...fns) => fns.reduce(
  (f, g) => (...args) => f(g(...args)),
)

const add5 = x => x + 5;
const add1 = x => x + 1;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(
  add1,
  add5,
  multiply,
);
const s = multiplyAndAdd5(5, 2); // 15
console.log('s', s);