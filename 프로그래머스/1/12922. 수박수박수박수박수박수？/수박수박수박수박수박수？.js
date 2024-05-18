function solution(n) {
    let ans ="";
    for(let i=1;i<=n;i++){
        ans += i%2===0? '박':'수'
    }
    return ans;
}

function solution1(n) {
    var answer = "";
    for(let i=1;i<n+1;i++){
        answer += i%2===0 ? "박" : "수";
    }
    
    return answer;
}