function solution(k, m, score) {
    let ans =0;
    score = score.sort((a,b)=>b-a);
    for(let i=m-1;i<score.length;i+=m){
        ans += score[i]*m;
    }
    return ans;
}



function solution1(k, m, score) {
    var answer = 0;
    score = score.sort((a,b)=>b-a); //내림차순 정렬
    for(let i=m-1;i<score.length;i+=m){ //m개씩 자르고 가장 낮은 값을 가격으로 치니까 m-1,m+m-1
            answer += score[i]*m //i가 m개씩 잘랐을 때 가장 낮은 값을 가진 값 이므로 m곱해서 더하기
    }
    return answer;
}