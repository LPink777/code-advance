const deepClone = obj => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(obj).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )
  return Array.isArray(obj) && obj.length
          ? (clone.length = obj.length) && Array.from(clone)
          : Array.isArray(obj)
            ? Array.from(obj)
            : clone;
}

const a = { foo: 'bar', obj: { a: { c: 1}, b: [{a: 1},2,3] } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
console.log('b', b);
