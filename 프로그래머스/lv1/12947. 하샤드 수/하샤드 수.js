function solution(x) {
    let num = 0;
    let xx  = x;
    while(x>0){
        num += x%10;
        x = parseInt(x/10);
    }
    
    return xx % num === 0;
}
