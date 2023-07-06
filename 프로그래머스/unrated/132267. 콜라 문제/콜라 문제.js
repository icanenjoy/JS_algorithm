function solution(a, b, n) {
    var answer = 0;
    while(n>=a){
        answer += Math.floor(n/a)*b;
        n = n-Math.floor(n/a)*a+Math.floor(n/a)*b; 
    }
    return answer;
}

