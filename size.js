const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce(
      (acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') {
          return dig(val, target);
        }
      },
      undefined
    )

const data = {
  level1: {
    level3: 'some data1',
    level2: {
      level3: 'some data',
    }
  }
};
const s = dig(data, 'level3'); // 'some data'
const ss = dig(data, 'level4'); // undefined
console.log('s,', s, ss);