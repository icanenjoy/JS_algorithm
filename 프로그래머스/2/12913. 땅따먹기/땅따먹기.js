function solution(land) {
    for(let i=1;i<land.length;i++){
        for(let j=0;j<4;j++){
            const check = [...land[i-1]];
            check[j] = 0;
            land[i][j] = Math.max(...check)+land[i][j];
        }
    
    }

    return Math.max(...land[land.length-1]);
}