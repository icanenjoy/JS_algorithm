function solution(n, k) {
    var answer = 0;
    let num = n.toString(k).split("0").map(Number);
    for(let i=0;i<num.length;i++){
        const check = num[i];
        console.log(check);
        if(check===2) answer++;
        if(check <2 || check % 2===0) continue;
        let flag = true;
        for (let j = 3; j <= Math.sqrt(check); j+=2) {
            if (check % j === 0) flag = false;
        }
        if(flag) answer++;
    }
    return answer;
}