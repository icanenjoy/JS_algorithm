function solution(k, m, score) {
    var answer = 0;
    score = score.sort((a,b)=>b-a);
    for(let i=m-1;i<score.length;i+=m){

            answer += score[i]*m 
    }
    return answer;
}