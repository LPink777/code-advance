const symmetricDifferenceWith = (a, b, comps) =>
  [
    ...a.filter(x => b.findIndex(y => comps(x, y)) === -1),
    ...b.filter(x => a.findIndex(y => comps(x, y)) === -1)
  ]

const res = symmetricDifferenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1, 1.2, 3.9]

console.log('res', res);