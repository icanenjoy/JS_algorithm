function solution(cards1, cards2, goal) {
    var answer = "Yes";
    let card1idx =0;
    let card2idx =0;
    for(let i=0;i<goal.length;i++){
        if(cards1[card1idx]===goal[i]) card1idx++;
        else if(cards2[card2idx]===goal[i]) card2idx++;
        else{
            answer = "No";
            break;
        }
    }
    return answer;
}