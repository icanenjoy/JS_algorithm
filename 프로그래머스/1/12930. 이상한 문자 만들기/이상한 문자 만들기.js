function solution(s) {
    let count = 1;
    let ans = "";
    for(let i=0;i<s.length;i++){
        if(s[i]===" ") count=0;    
        ans += count%2===1 ? s[i].toUpperCase() : s[i].toLowerCase();
        count++;
    }
    return ans;
}

function solution1(s) {
    var answer = s.split(" ");//3개로 쪼개기
    for(let i=0;i<answer.length;i++){ //3번 돌리기
        let ans = ""; //단어수정용
        for(let j=0; j<answer[i].length;j++){ //단어만들기
            ans += j%2===0 ? answer[i][j].toUpperCase() : answer[i][j].toLowerCase();
        } //짝수는 대문자 홀수는 소문자로
        answer[i] = ans;
    }
    
    return answer.join(" ");
}