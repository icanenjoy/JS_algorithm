function solution(phone_number) {
    var answer = "";
    for(let i=0;i<phone_number.length;i++){
        answer += (phone_number.length-1-i)>3 ? "*" : phone_number[i];
    }
    return answer;
}

function solution2(phone_number) { //gpt
  const length = phone_number.length; 
  const lastFourDigits = phone_number.slice(-4); //뒤에 4개 자르기
  const hiddenDigits = "*".repeat(length - 4); //앞에 *로 채우기
  return hiddenDigits + lastFourDigits; // 합치기
}