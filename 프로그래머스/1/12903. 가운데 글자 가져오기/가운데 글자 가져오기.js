function solution(s) {
    let mid = s.length/2;
    s=s.split("");
    return s.length%2===1 ? s[Math.floor(mid)] : [s[mid-1],s[mid]].join("");
}


function solution1(s) {
  var answer = "";
  const anslen = parseInt(s.length / 2);
  if (s.length % 2 === 0) {
    answer = s[anslen - 1];
    answer = answer + s[anslen];
  } else {
    answer = s[anslen];
  }

  return answer;
}


function solution2(s) {
  const anslen = Math.floor(s.length / 2); //내림사용하기
  if (s.length % 2 === 0) {
    return s.substr(anslen - 1, 2); //특정 index에서 원하는 길이만큼 자르기
  } else {
    return s.charAt(anslen); //원하는 인덱스 문자 출력
  }
}