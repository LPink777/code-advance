const deepMapKeys = (obj, fn) =>
  Object.entries(obj).reduce(
    (a, v) => {
      const key  = fn(v[0]);
      a[key] = typeof v[1] === 'object'
                ? Array.isArray(v[1])
                    ? v[1].map(x => typeof v[1] === 'object' ? deepMapKeys(v[1], fn) : v[1])
                    : deepMapKeys(v[1], fn)
                : v[1]
      return a;
    },
    {}
  )

const obj = {
  foo: '1',
  nested: {
    child: {
      withArray: [
        {
          grandChild: ['hello']
        }
      ]
    }
  }
};
const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());
console.log('upperKeysObj', upperKeysObj);


/*
{
  "FOO":"1",
  "NESTED":{
    "CHILD":{
      "WITHARRAY":[
        {
          "GRANDCHILD":[ 'hello' ]
        }
      ]
    }
  }
}
*/