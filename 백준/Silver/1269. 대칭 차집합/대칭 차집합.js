let [N, A, B] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
A = A.split(" ").map(Number);
B = B.split(" ").map(Number);

let ans = A.length + B.length;

B = new Set(B);

for (let i = 0; i < A.length; i++) {
  if (B.has(A[i])) ans-=2;
}

console.log(ans);