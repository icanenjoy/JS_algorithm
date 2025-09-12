function solution(dirs) {
    var answer = 0;
    
    let x = 0;
    let y = 0;
    const dx = {U:0,D:0,R:1,L:-1}
    const dy = {U:1,D:-1,R:0,L:0}
    
    const edges = new Set();
    
    for(let i=0;i<dirs.length;i++){
        const nx = x+dx[dirs[i]];
        const ny = y+dy[dirs[i]];
        if(nx<-5||nx>5||ny<-5||ny>5) continue;
        const a = `${x},${y}`
        const b = `${nx},${ny}`
        const edge = a>b? `${a},${b}`: `${b},${a}`
        edges.add(edge);
        x=nx;y=ny;
        
    }
    return edges.size;
}