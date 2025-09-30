function solution(order) {
    const keep = [];
    let idx = 0;
    for(let box=1;box<=order.length;box++){
        if(box===order[idx]){
            idx++;
            while(keep.length&&keep[keep.length-1]===order[idx]){
                keep.pop();
                idx++;
            }
        }else{
            keep.push(box);
            while(keep.length&&keep[keep.length-1]===order[idx]){
                keep.pop();
                idx++;
            }
        }
    }
 while(keep.length&&keep[keep.length-1]===order[idx]){
                keep.pop();
                idx++;
            }
    return idx;
}