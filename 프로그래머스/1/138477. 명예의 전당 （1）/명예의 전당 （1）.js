function solution(k, score) {
    const ans = [];
    let hall = [];
    for(let i=0;i<score.length;i++){
        hall.push(score[i])
        hall = hall.sort((a,b)=>b-a);
        if(hall.length>k) hall.pop();
        ans.push(hall[hall.length-1])
    }
    return ans;
}


function solution1(k, score) {
    var answer = [];
    let hall = [];
    for(let i=0;i<Math.min(k,score.length);i++){ //k나 score 길이 짧은 것 골라서 
        hall.push(score[i]) //무조건 전당에 넣기
        hall = hall.sort((a,b)=>b-a); //내림차순으로 정렬
        answer.push(hall[i]); //아직 다 안 찬 상태라서 전당의 마지막 값이 최저점수
    }
    for(let i=k;i<score.length;i++){ //그리고 k부터 score 끝까지
        hall[k-1] = (hall[k-1]<score[i]) ? score[i] : hall[k-1]; //더 큰 값을 마지막에 넣고
        hall = hall.sort((a,b)=>b-a); // 정렬하기
        answer.push(hall[k-1]); //마지막값 정답 배열에 정리
    }
    
    return answer;
}