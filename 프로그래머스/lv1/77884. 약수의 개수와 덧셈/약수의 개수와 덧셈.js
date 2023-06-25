function solution(left, right) {
    var answer = 0;
    for(let i =left; i<=right; i++){
        let ali = 0;
        for(let j=0; j<=i;j++){
            if(i%j===0) ali++;
        }
        answer += (ali%2===0) ? i : -(i);
    }
    return answer;
}