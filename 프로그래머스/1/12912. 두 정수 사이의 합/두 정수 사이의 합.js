function solution(a, b) {
    [a,b] = a>b? [b,a] : [a,b];
    for(let i=a+1;i<=b;i++)
        a += i;
    return a;
}