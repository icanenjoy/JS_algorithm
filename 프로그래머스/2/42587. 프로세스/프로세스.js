

function solution(priorities, location) { //계산보다 그냥 뺏다꼇다가 낫네..
    var answer = 0;
    let max = Math.max(...priorities);
    while(1){
        const check = priorities.shift();
        location--;
        if(check===max){
            answer++;
            if(location===-1) return answer;
            max = Math.max(...priorities);
        }else{
            priorities.push(check);
            if(location===-1) location = priorities.length-1;
        }
        
    }
}




function solution2(priorities, location) { //계산보다 그냥 뺏다꼇다가 낫네..
    var answer = 0;
    while(1){
        const Max = Math.max(...priorities); //배열에서 가장 큰 값
        const maxIdx = priorities.indexOf(Max); //큰 값의 인덱스
        if(maxIdx===location) break; //최고 우선순위의 인덱스와 같은 위치면 뽑혀서 그냥 멈춤
        for(let i=maxIdx;i>0;i--){ //가장 우선순위가 높은 프로세스가 0번 인덱스 오도록 조정
            const back = priorities.shift(); 
            priorities.push(back);
            location--;
        }
        priorities.shift(); //0번 빼고
        location--; //위치 조정
        if(location< 0) location += priorities.length+1; //빼기만 해서 0보다 작으면 길이+1더해줌
        answer++; //하나 뺐으니 1올리기
    }
    
    return ++answer; //리턴할때 answer++은 틀림
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