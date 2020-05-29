const fibonacci = n => {
  return n < 2 ? 1 : fibonacci(n - 1) +  fibonacci(n - 2);
}

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

const n = fibonacci(9);

console.log('n', n);