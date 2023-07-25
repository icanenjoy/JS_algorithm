function solution(participant, completion) {
    let answer = '';
    const hash = new Map();
    
    for(let i=0;i<participant.length;i++){
        !hash.has(participant[i]) ? hash.set(participant[i],1) : hash.set(participant[i],hash.get(participant[i])+1);
    }
    
    
    for(let i=0;i<completion.length;i++) {
        if(hash.has(completion[i])&& hash.get(completion[i]) > 0 ) {
            hash.set(completion[i],hash.get(completion[i])-1); //값 하나 줄여줌
        }
    }
    
    for(let i=0;i<participant.length;i++){
        if(hash.get(participant[i])===1) answer= participant[i];
    }
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