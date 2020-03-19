const intersection = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter(x => s.has(x));
}

const res = intersection([1, 2, 3, 5], [4, 3, 2, 9, 5]); // [2, 3]

console.log('res', res);