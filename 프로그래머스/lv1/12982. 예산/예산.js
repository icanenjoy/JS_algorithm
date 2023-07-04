function solution(d, budget) {
    var answer = 1;
    d.sort((a,b)=>a-b);
    if(d[0]> budget) return 0;
    sum = d[0];
    for(let i=1;i<d.length;i++){
        sum += d[i];
        answer++;
        if(sum>budget){
            answer--;
            break;
        }
    }
    return answer;
}