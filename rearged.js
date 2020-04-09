const rearg = (fn, arr) => (...args) => fn(...arr.map((x) => args[x]))

var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
const s = rearged('b', 'c', 'a'); // ['a', 'b', 'c']

console.log('s', s);