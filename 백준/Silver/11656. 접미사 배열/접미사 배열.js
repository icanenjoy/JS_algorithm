let N = require("fs").readFileSync("/dev/stdin").toString().trim();
let changeN = N;
let arr = [N];

for (let i = 0; i < N.length - 1; i++) {
  changeN = changeN.slice(1);
  arr.push(changeN);
}
arr = arr.sort();
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}