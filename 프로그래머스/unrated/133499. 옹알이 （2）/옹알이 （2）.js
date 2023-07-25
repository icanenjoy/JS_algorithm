function solution(babbling) {
    var answer = 0;
    const can = ["aya","ye","woo","ma"]   
    for(let i=0;i<babbling.length;i++){ //옹알이들을 돌기
        for(let j=0;j<can.length;j++){ //할 수 있는 단어 돌기
            const doubleword = can[j]+can[j]; //연속되는 발음 표현 
            if(babbling[i].includes(doubleword)){ //만약 연속되는 발음이 포함되어 있다면
                babbling[i] = "1"; //1로 바꿔버리기
                break;
            }
            if(babbling[i].includes(can[j])) { // 말 할 수 있는 단어를 포함 한다면
                babbling[i] = babbling[i].replace(can[j], "0"); //말 할 수 있는 부분을 0으로 바꾸기
                j=-1; //바뀐부분이 있으면 처음부터 다시 확인
            }
        }
        while(1){
            if(babbling[i].includes("0")){ //0이 포함되어 있으면
                babbling[i] = babbling[i].replace("0",""); //""으로 바꾸기
            } else break; //다바꾸면 그만두기
        } 
        
        if(babbling[i]==="") answer++; // 단어가 ""이면 답 수 올려주기
    }
    return answer;
}