const deepClone = (obj) => {
  if (obj === null) return null;
  const clone = Object.assign({}, obj);
  Object.entries(obj).forEach(
    ([key, val]) =>
      (clone[key] = typeof val === "object" ? deepClone(val) : val)
  );

  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone;
};

const obj = {
  a: 1,
  c: {
    c1: 1,
    c2: [22, 22, 22],
  },
};

const obj1 = [1,2,3,4,4,{a: 1, b: {a: 1}}];

const res = deepClone(obj);

console.log('res', res);
