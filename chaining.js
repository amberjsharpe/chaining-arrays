const integers = [23, 15, 6, 3, 11, 20, 18, 7, 21, 1, 29, 10, 12, 8];

let newInteger = integers
.sort((a, b) => a - b)
.reverse()
.filter(a => a < 19)
.map(a => (a * 1.5) - 1)
.reduce((sum, a) => sum + a);
console.log(newInteger);


