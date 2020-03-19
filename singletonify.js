const singleTonify = (target) => {
  let s = new Proxy(target, {
    initStatus: null,
    construct(target, args) {
      if (!this.initStatus) {
        this.initStatus = new target(...args);
      }
      return this.initStatus;
    }
  })
  return s;
}

class MyClass {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const myProxy = singleTonify(MyClass);

console.log('object1', new myProxy('eddie'));
console.log('object2', new myProxy('crystal'));