function solution(players, callings) {
    const rank_player ={}
    const player_rank ={}
    let answer = [];
    for(let i=0;i<players.length;i++){
        rank_player[i+1] = players[i];
        player_rank[players[i]]=i+1;
    }
    for(let i=0;i<callings.length;i++){ //추월횟수만큼 
        player_rank[callings[i]] -= 1;
        const change = player_rank[callings[i]];
        const back_player = rank_player[change];
        rank_player[change] =callings[i];
        rank_player[change+1] = back_player;
        player_rank[back_player] += 1; 
    }
    for(let i=0;i<players.length;i++){
        answer.push(rank_player[i+1]);
    }
    return answer;
}