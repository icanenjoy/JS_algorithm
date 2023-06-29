function solution(sizes) {
    let w = 0;
    let h = 0;
    for(let i=0;i<sizes.length;i++){
        sizes[i].sort((a,b)=>a-b); //앞에값을 작은값으로 
        if(w<sizes[i][0]) w = sizes[i][0]; //더 크면 바꾸기
        if(h<sizes[i][1]) h = sizes[i][1]; //더 크면 바꾸기
    }
    return w*h;
}

function solution1(sizes) { //풀이중에 제일 맘에 듦
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]); //구조분해할당!
    
    let maxSize = [0, 0]; //오 배열로 저장
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}