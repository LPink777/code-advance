const unflattenObject = obj =>
  Object.keys(obj).reduce(
    (acc, val) => {
      const k = val.includes('.') ? val.split('.') : val;
      !Array.isArray(k)
        ? acc[k] = obj[k]
        : acc = k.reverse().reduce(
                  (a, v) => {
                    const s = {};
                    s[v] = Object.keys(a).length ? a : obj[val];
                    a = s;
                    return a;
                  },
                  {}
                )
      return Object.assign({}, acc);
    },
    {}
  );

const s = unflattenObject({ 'a.b.d.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }

console.log('s', s);