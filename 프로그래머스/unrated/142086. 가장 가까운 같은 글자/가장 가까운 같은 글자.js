function solution(s) {
    var answer = [];
    for(let i=0;i<s.length;i++){
        let check = -1;
        for(let j=0;j<i;j++){
            if(s[i]===s[j])
                check = i-j;
        }
        answer.push(check);
    }
    return answer;
}