function solution(n) {
    var answer = 0;
    for(let i=1; i*i <= n;i++){
        if(i*i===n)
            return (i+1)*(i+1)
    }
    return -1;
}