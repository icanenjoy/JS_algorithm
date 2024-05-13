function solution(phone_number) {
    let ans = phone_number.split("");
    for(let i=0;i<phone_number.length-4;i++)
        ans[i] = "*";
    return ans.join("").toString();
}

function solution2(phone_number) { //gpt
  const length = phone_number.length; 
  const lastFourDigits = phone_number.slice(-4); //뒤에 4개 자르기
  const hiddenDigits = "*".repeat(length - 4); //앞에 *로 채우기
  return hiddenDigits + lastFourDigits; // 합치기
}