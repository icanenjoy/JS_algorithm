function solution(k, dungeons) {
    var answer = 0;
    
    dungeons.sort((a,b)=> (a[0]-a[1])-(b[0]-b[1]));
    const arr = Array.from(Array(dungeons.length+1), () => Array(k+1).fill(0));
    for(let i=1;i<dungeons.length+1;i++){
        for(let j=1;j<k+1;j++){
            if (dungeons[i-1][0] > j) arr[i][j] = arr[i-1][j];
            else arr[i][j] = Math.max(arr[i-1][j], 1 + arr[i-1][j-dungeons[i-1][1]]);
        }
    }
    return arr[dungeons.length][k];
}