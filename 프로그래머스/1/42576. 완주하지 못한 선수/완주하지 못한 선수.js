function solution(participant, completion) { //hash를 배우고 푼 코드
    let answer;
    const hash = new Map();
    
    completion.forEach((player)=>{
        !hash.has(player) ? hash.set(player,-1) : hash.set(player, hash.get(player)-1);
    })
    
    for(let i=0;i<participant.length;i++){
        const player=participant[i];
        if(hash.has(player)&& hash.get(player)<1) hash.set(player,hash.get(player)+1);
        if(!hash.has(player)||hash.get(player)===1) {
            answer=player;
            break;
        }
    }
    
    return answer;
}


function first_solution(participant, completion) {
    let answer = '';
    const hash = new Map();
    
    for(let i=0;i<participant.length;i++){
        !hash.has(participant[i]) ? hash.set(participant[i],1) : hash.set(participant[i],hash.get(participant[i])+1);
    } //참가자들 hash에 정리
    
    
    for(let i=0;i<completion.length;i++) {
        if(hash.has(completion[i])&& hash.get(completion[i]) > 0 ) {
            hash.set(completion[i],hash.get(completion[i])-1);
        }
    } //완주자들 하나씩 빼줌
    
    for(let i=0;i<participant.length;i++){
        if(hash.get(participant[i])===1) answer= participant[i];
    } //남은 하나 구하기
    
    return answer;
}





function solution1(participant, completion) { //시간초과
    let answer = '';
    for(let i=0;i<participant.length;i++){
        if(completion.includes(participant[i])){
            completion[completion.indexOf(participant[i])] = ""
            participant[i] = ""
        } else answer = participant[i]
    }
    return answer;
}