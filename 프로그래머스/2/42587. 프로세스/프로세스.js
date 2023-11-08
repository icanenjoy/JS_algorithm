function solution(priorities, location) {
    var answer = 0;
    while(1){
        const Max = Math.max(...priorities); //배열에서 가장 큰 값
        const maxIdx = priorities.indexOf(Max); //큰 값의 인덱스
        if(maxIdx===location) break;
        for(let i=maxIdx;i>0;i--){
            const back = priorities.shift();
            priorities.push(back);
            location--;
        }
        priorities.shift();
        location--;
        if(location< 0) location += priorities.length+1;
        answer+=1;
    }
    
    return answer+=1;
}







function solution1(priorities, location) {
    var answer = 0;
    while(1){
        const Max = Math.max(...priorities); //배열에서 가장 큰 값
        const maxIdx = priorities.indexOf(Max); //큰 값의 인덱스
        if(maxIdx===location) return answer+1; //큰 값의 인덱스와 위치가 일치하면 return
        else if(maxIdx<location) location = location-maxIdx-1;//위치보다 우선순위가 높은게 앞에 있을 때
        else if(maxIdx>location) location = location + priorities.length-1-maxIdx; //위치보다 우선순위가 높은게 뒤에 있을 때
        priorities.splice(maxIdx,1); //실행된 프로세스 종료
        answer++;// 실행횟수 올려주기
    }
}