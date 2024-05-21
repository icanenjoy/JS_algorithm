function solution(d, budget) {
    d = d.sort((a,b)=>a-b);
    let ans = 0;
    while(1){
        budget -= d[ans];
        if(budget<0 || ans===d.length) break;
        ans++;
    }
    return ans;
}






function solution1(d, budget) {
    d.sort((a,b)=>a-b); //작은 값부터 정렬
    if(d[0]> budget) return 0; //만약 첫 값부터 예산 초과면 0리턴
    
    var answer = 1; // 초기값 부서 한팀 지원
    sum = d[0]; //예산 초기값도 첫 부서지원금
    for(let i=1;i<d.length;i++){
        sum += d[i]; //두 번째 부서부터 더해줌
        answer++; //지원팀도 더해줌
        if(sum>budget){ //예산초과되면
            answer--; //마지막 지원팀 빼고
            break; //멈춤
        }
    }
    return answer;
}