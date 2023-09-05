let [N, K] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(run(N, K));

function run(N, K) {
  let stack = new Array(N + 1).fill(true);

  for (let i = 2; i <= N; i++) {
    if (stack[i]) {
      for (let j = i; j <= N; j += i) {
        if (!stack[j]) continue;

        stack[j] = false;
        K--;
        if (K === 0) return j;
      }
    }
  }
}
//gpt 도움 받음 - true채워서 false로 바꾸기, false면 건너뛰기