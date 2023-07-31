function solution(board, moves) {
    var answer = 0;
    let arr = [];
    for(let i=0;i<moves.length;i++){
        const position = moves[i]-1;
        for(let j=0;j<board.length;j++){
            if(board[j][position]!==0){
                arr.push(board[j][position]);
                board[j][position] = 0;
                break;
            }
        }
    }
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            answer += 2;
            arr[i]=0;
            arr[i+1]=0;
            arr = arr.filter(item => item !== 0);
            i=-1;
        }
    }
    return answer;
}