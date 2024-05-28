function solution(cards1, cards2, goal) {
    let oneIdx = 0;
    let twoIdx = 0;
    for(let i =0;i<goal.length;i++){
        if(goal[i]===cards1[oneIdx]) oneIdx++;
        else if(goal[i]===cards2[twoIdx]) twoIdx++;
        else return 'No'
    }
    return 'Yes';
}

function solution1(cards1, cards2, goal) {
    var answer = "Yes";
    let card1idx =0;
    let card2idx =0;
    for(let i=0;i<goal.length;i++){ //goal을 완성할 수 있는가?
        if(cards1[card1idx]===goal[i]) card1idx++; //골의 첫단어가 첫 번째 묶음에 있나? 있으면 인덱스 하나 올리기
        else if(cards2[card2idx]===goal[i]) card2idx++; //두 번째 묶음에 있나? 있으면 인덱스 하나 올리기
        else{ //둘다 해당 안되면 
            answer = "No";//no!
            break;
        }
    }
    return answer;
}