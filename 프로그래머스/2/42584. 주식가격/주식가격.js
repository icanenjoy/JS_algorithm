function solution(prices) {
    var answer = [];
    for(let i=0;i<prices.length-1;i++){
        answer.push(0);
        for(let j=i+1;j<prices.length;j++){
            answer[i]++;
            if(prices[i]>prices[j]) break;
        }
    }
    answer.push(0);
    return answer;
}