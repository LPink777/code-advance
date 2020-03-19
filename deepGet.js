const deepGet = (obj, arr) =>
  arr.reduce(
    (acc, val) => acc && acc[val] ? acc[val] : null,
    obj
  )

let index = 2;
const data = {
  foo: {
    foz: [1, 2, 3],
    bar: {
      baz: ['a', 'b', 'c']
    }
  }
};
const s = deepGet(data, ['foo', 'foz', index]); // get 3
const s1 = deepGet(data, ['foo', 'bar', 'baz', 8, 'foz']); // null
console.log('s, s1', s, s1);