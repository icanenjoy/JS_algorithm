function solution(k, tangerine) {
    var answer = 0;
    let tanSort = {};
    for(let i=0;i<tangerine.length;i++){
        tanSort[tangerine[i]] = tanSort[tangerine[i]]===undefined? 1:tanSort[tangerine[i]]+1;
    }
    const tanSortKey = Object.keys(tanSort).sort((a, b) => tanSort[b] - tanSort[a]);
        for(const key of tanSortKey){
            k -= tanSort[key];
            answer++;
            if(k<=0) return answer;
        }
    // while(1){
    //     const keys = Object.keys(tanSort);
    //     let max = 0;
    //     let maxval = 0;
    //     for (const key of keys) {
    //         if(tanSort[key]>maxval){
    //             maxval = tanSort[key];
    //             max = key;
    //         }
    //     }
    //     k -= maxval;
    //     tanSort[max] = 0; //delete tanSort.max;는 틀림
    //     answer++;
    //     if(k<=0){return answer}
    // }
}