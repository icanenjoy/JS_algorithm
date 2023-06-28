function solution(s) {
    let words = s.split(" ");//3개로 쪼개기
    var answer = [];
    for(let i=0;i<words.length;i++){ //3번 돌리기
        let ans = ""; //단어수정용
        for(let j=0; j<words[i].length;j++){ //단어만들기
            ans += j%2===0 ? words[i][j].toUpperCase() : words[i][j].toLowerCase();
        }
        answer.push(ans);
    }
    
    return answer.join(" ");
}