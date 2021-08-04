// Use a type based arrow funciton declaration
const sum = (n1:number, n2:number) =>  n1 + n2

console.log(sum(1, 23))  // This will work
// console.log(sum(1, '23'))  // This will throw a warning on TS but in JS it will return 123 :D
