function solution(n, left, right) {
    const arr=[];
    for(let i=left;i<right+1;i++){
        const quotient=Math.floor(i/n);
        const remainder=i%n;
        if(quotient===0) arr[i-left]=remainder+1;
        else if(remainder<quotient) arr[i-left] = quotient+1;
        else if(remainder>=quotient) arr[i-left] = remainder+1;
    }
    return arr;
}