function solution(sizes) {
    let w = 0;
    let h = 0;
    for(let i=0;i<sizes.length;i++){
        sizes[i].sort((a,b)=>a-b);
        if(w<sizes[i][0]) w = sizes[i][0];
        if(h<sizes[i][1]) h = sizes[i][1];
    }
    return w*h;
    
}