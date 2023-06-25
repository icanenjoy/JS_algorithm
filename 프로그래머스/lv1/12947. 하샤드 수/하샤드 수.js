function solution(x) {
    let num = 0;
    let xx  = x;
    while(x>0){
        num += x%10;
        x = parseInt(x/10);
    }
    if(xx%num ===0) return true;
    else return false;
}