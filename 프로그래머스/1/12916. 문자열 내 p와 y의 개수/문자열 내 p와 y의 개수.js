function solution(s){
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i].toLowerCase()==='p') count++;
        if(s[i].toLowerCase()==='y') count--;
    }
    return count===0;
}
function solution1(s){
    let p = 0;
    let y = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]==='p'||s[i]==='P') p++;
        if(s[i]==='y'||s[i]==='Y') y++;
    }
    return p===y? true:false;
}

function solution2(s) { //gpt
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i].toLowerCase() === 'p') count++; //s문자열 소문자로 바꾸기
    if (s[i].toLowerCase() === 'y') count--; 
  }

  return count === 0; //카운트는 내 아이디어
}