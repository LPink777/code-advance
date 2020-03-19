// 返回一个数组中所有可能得排序

const permutations = arr => {
  if(arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) => acc.concat(
      permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(x => [item, ...x])
    ),
    []
  )
};

const res = permutations([1, 3, 4]);

console.log('res', res);