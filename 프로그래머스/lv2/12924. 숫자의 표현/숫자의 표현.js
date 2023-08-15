function solution(n) {
    var answer = [0,0]; //합, n이 되는 수 개수
    for(let i=1;i<=n;i++){ //1~n까지 돌기
        answer[0] = 0;
        for(let j=i;j<=n;j++){ //i값부터 더해서 n가 되는지 보기
            answer[0] +=j; //i값부터 더하기
            if(answer[0]===n) answer[1]++; //n이되면 n이 되는 수 개수 올려주기
            else if(answer[0]>n) break; //n보다 크면 멈추기
        }
    }
    return answer[1];
}