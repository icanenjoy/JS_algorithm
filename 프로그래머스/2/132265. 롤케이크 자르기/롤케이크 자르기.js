function solution(topping) {
    let ans = 0;
    let olderBro = {};
    let youngerBro = {};
    for(let i=0;i<topping.length;i++){
        youngerBro[topping[i]] = youngerBro[topping[i]]? youngerBro[topping[i]]+1:1;
    }
    
    let olderCnt = 0;
    let youngerCnt = Object.keys(youngerBro).length;
    //if( youngerCnt%2===1) return 0;
    
    while(1){
        let isTopping = topping.pop();
        if(!olderBro[isTopping]){
            olderBro[isTopping]=1;
            olderCnt++;
        }
         youngerBro[isTopping] = youngerBro[isTopping]-1;
        if(youngerBro[isTopping]===0) youngerCnt--;
        
        if(olderCnt===youngerCnt) ans++;
        if(olderCnt>youngerCnt) break;
        
    }
    return ans;
}