function solution(wallpaper) {
    var answer = [];
    const S = [wallpaper.length-1,wallpaper[0].length-1];
    console.log(S);
    const E = [0,0];
    for(let i=0;i<wallpaper.length;i++){
        for(let j=0;j<wallpaper[i].length;j++){
            if(wallpaper[i][j]==="#"){
                S[0] = S[0]>i? i:S[0];
                S[1] = S[1]>j? j:S[1];
                E[0] = E[0]<i+1? i+1:E[0];
                E[1] = E[1]<j+1? j+1:E[1];
            }
        }
    }
    answer[0] = S[0];
    answer[1] = S[1];
    answer[2] = E[0];
    answer[3] = E[1];
    return answer;
}