function solution(dartResult) {
    var answer = [];
    let score = ""; //점수부분
    for(let i=0;i<dartResult.length;i++){ //문자열 길이만큼 돌기
        if(!isNaN(parseInt(dartResult[i]))) score += dartResult[i]; //숫자면 점수에 문자열 형태로 저장
        else if(dartResult[i]==="S"){ //S면
            answer.push(parseInt(score)) //점수저장
            score=""; //점수 초기화
        }else if(dartResult[i]==="D"){
            answer.push(parseInt(score)**2)
            score="";
        }else if(dartResult[i]==="T"){
            answer.push(parseInt(score)**3)
            score="";
        }else if(dartResult[i]==="*"){ //별만나면
            answer[answer.length-1] *= 2 //배열 마지막과 그 전값에 *2
            answer[answer.length-2] *= 2
        }else if(dartResult[i]==="#"){
            answer[answer.length-1] *= -1 //#만나면 배열 마지막값에 *-1 
        }
        
    }
    return answer.reduce((a,b)=>a+b); //점수들 더함
}