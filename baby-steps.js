// Solution 1

// let sum = 0;
// for(let i = 0; i < process.argv.length; i++) {
//   if (i > 1) {
//     sum += +process.argv[i]
//   }
// }
// console.log(sum)

// Solution 2
const args = process.argv.slice(2);
const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue);
console.log(args.reduce(reducer, 0));