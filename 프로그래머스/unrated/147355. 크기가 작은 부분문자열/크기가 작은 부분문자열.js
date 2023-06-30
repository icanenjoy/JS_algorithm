function solution(t, p) {
    var answer = 0;
    let answers = t.length-p.length+1; //부분 문자열 개수
    for(let i=0;i<answers;i++){
        let test ="";
        for(let j=i;j<i+p.length;j++){
            test += t[j];
        }
        if(parseInt(test)<=parseInt(p)) answer++;
    }
    return answer;
}