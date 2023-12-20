function solution(progresses, speeds) {
    var answer = [1];
    const days = []; //걸리는 날
    for(let i=0;i<progresses.length;i++){
        days.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    
    let flagday = days[0]
    for(let i=1;i<days.length;i++){
        if(flagday<days[i]){
            flagday = days[i];
            answer.push(1);
        }else{
            answer[answer.length-1]++;
        }
    }
    return answer;
}






function solution1(progresses, speeds) {
    var answer = [1];
    const days = []; //걸리는 날
    for(let i=0;i<progresses.length;i++){
        days.push(Math.ceil((100-progresses[i])/speeds[i]))// 올림(남은 분량/하루 작업량)-> 소수점도 하루임.
    }
    let time = days[0]; //첫 번째 과제를 기준으로 잡기
    for(let i=1;i<days.length;i++){
        if(time < days[i]){ //만약 기준보다 더 걸리는 작업을 만나면
            time = days[i] //기준점을 바꾸고
            answer.push(1); //answer에 새로운 배열값 넣기
        }else { //그게 아니면
            answer[answer.length-1]++;// 기존에 있던 마지막 값을 올려주기
        }
    }
    return answer;
}