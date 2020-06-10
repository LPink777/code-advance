let obj = {
  a: 1,
  b: 2,
  c: { d: 1 }
};

let obj1 = [1,2,4];

function update() {
  console.log('update');
}

const handler = {
  get(target, key) {
    if (typeof target[key] === 'object') {
      return new Proxy(target[key], handler);
    }
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    if (value !== target[key]) {
      update();
      return Reflect.set(target, key, value);
    }
    return true;
  },
};

const proxy = new Proxy(obj, handler);

proxy.c.d = 4;

// proxy.push(2);

console.log('proxy', proxy);