const intersectionWith = (a, b, comp) =>
	a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

const res = intersectionWith(
	[1, 1.2, 1.5, 3, 0],
	[1.9, 3, 0, 3.9],
	(a, b) => Math.round(a) === Math.round(b)
); // [1.5, 3, 0]

console.log('res', res);