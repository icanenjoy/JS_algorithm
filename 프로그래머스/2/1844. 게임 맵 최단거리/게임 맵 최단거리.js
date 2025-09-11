function solution(maps) {
    var answer = 0;
    const n = maps.length;
    const m = maps[0].length;
    const ansMaps = Array.from({length:n},()=>Array(m).fill(0))
    const nowLocation = [[0,0]];
    let point = 0;
    ansMaps[0][0] =1;
    const dircX = [1,0,-1,0]
    const dircY = [0,1,0,-1]
    
    while(point<nowLocation.length){
        const [x,y] = nowLocation[point++];
        if(x===n-1&&y===m-1)  return ansMaps[x][y]
        for(let i=0;i<4;i++){
            const [moveX,moveY] = [x+dircX[i],y+dircY[i]];
            if(moveX<0 || moveX>=n || moveY<0 || moveY>=m) continue;
            if(maps[moveX][moveY]===0||ansMaps[moveX][moveY]!==0) continue;
            ansMaps[moveX][moveY] = ansMaps[x][y]+1
            nowLocation.push([moveX,moveY])
        }
    }
    return -1;
}