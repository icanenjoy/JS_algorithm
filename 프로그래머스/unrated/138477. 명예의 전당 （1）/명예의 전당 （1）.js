function solution(k, score) {
    var answer = [];
    let hall = [];
    for(let i=0;i<Math.min(k,score.length);i++){
        hall.push(score[i])
        hall = hall.sort((a,b)=>b-a);
        answer.push(hall[i]);
    }
    for(let i=k;i<score.length;i++){
        hall[k-1] = (hall[k-1]<score[i]) ? score[i] : hall[k-1];
        hall = hall.sort((a,b)=>b-a);
        answer.push(hall[k-1]);
    }
    
    return answer;
}