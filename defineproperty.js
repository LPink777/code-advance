let obj = {
  a: 1,
  b: 2,
  c: { a: 1 }
}

function update() {
  console.log('update');
}

function definePropTive (obj, key, value){
  if(typeof value === 'object') observer(value);
  //如果是不可配置的，直接返回值
  if(Object.getOwnPropertyDescriptor(obj,key).configurable) return;
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      return value;
    },
    set(val) {
      return val !== value ? (update(), val) : value;
    }
  })
}

function observer(obj) {
  if (typeof obj !== 'object') return obj;

  for (const key in obj) {
    definePropTive(obj, key, obj[key]);
  }
}

observer(obj);

obj.c.a = 2;

//定义不存在的属性不生效
//数组的push splice slice 等方法不生效
