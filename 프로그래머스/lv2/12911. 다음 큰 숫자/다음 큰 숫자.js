function solution(n) {
    var answer = 0;
    
    return checkNum(n,n+1);
}

function checkNum(n,bigN){
    const nLen = n.toString(2).split("").filter(a => a==="1").length;
    const bigNLen = bigN.toString(2).split("").filter(a => a==="1").length;
    return nLen===bigNLen ? bigN : checkNum(n, bigN+1);
}