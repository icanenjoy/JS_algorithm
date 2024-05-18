function solution(left, right) {
    let ans = 0;
    
    for(let i=left; i<=right;i++){
        let ali = 0;
        for(let j=0;j<=i;j++){
            if(i%j===0) ali++;
        }
        ans += ali%2===0? i:-(i);
    }
    return ans;
}

function solution1(left, right) {
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




function solution1(left, right) {
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