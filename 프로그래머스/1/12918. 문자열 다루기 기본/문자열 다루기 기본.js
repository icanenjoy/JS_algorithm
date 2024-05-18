function solution(s) { //찾아봤는데 길이도 걸러야,, 
    if(s.length===4 || s.length===6){
        return /^[0-9]+$/.test(s);
    }
    return false;
}


function solution1(s) { //찾아봤는데 길이도 걸러야,, 
    if(s.length===4||s.length===6){
        return /^[0-9]+$/.test(s);
    }else return false;
}



function solution3(s) { //5,6,28,29 / "0123"같은 경우 해결
    return /^[0-9]+$/.test(s);
}

function solution2(s) { //5,6,28,29 / 하나씩 비교
  for (let i = 0; i < s.length; i++) {
    if (isNaN(parseInt(s[i]))) return false;
  }
  return true;
}

function solution1(s) { //5,6,30 / 숫자바꿔서 같은지 비교, 문자있으면 짤림
    const a = parseInt(s).toString();
    return a===s;
}