function solution(n, m) {
    var answer = [];
    if(n>m){
        const temp = n;
        n = m;
        m = temp;
    }
    
    for(let i=m;i>0;i--){
        if(m%i===0 && n%i===0){
            answer[0] = i;
            break;
        }
    }
    
    for(let i=m;i<=m*n;i++){
        if(i%m===0 && i%n===0){
            answer[1] = i;
            break;
        }
    }
    return answer;
}