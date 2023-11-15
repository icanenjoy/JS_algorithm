function solution(n, t, m, p) {
    var answer = '';
    let num = '';
    for(let i=0;i<t*m;i++){
        num+=i.toString(n);
    }
    for(let i=0;i<t;i++){
        answer+=num[i*m+p-1];
    }
    return answer.toUpperCase();
}