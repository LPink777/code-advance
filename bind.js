const bind = (fn, context, ...objs) => (...args) => {
  console.log('objs', objs);
  return fn.apply(context, [...objs, ...args])
}

function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'fred' };
const freddyBound = bind(greet, freddy);
console.log(freddyBound('hi', '!')); // 'hi fred!'