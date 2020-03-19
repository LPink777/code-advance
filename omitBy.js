
const omitBy = (obj, fn) =>
  Object.entries(obj).reduce(
    (acc, val) => {
      if(fn(val[1])) {
        acc[val[0]] = val[1];
        return acc;
      };
      return acc;
    },
    {}
  )

const s = omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }

console.log('s', s);