function solution(n) {
    var answer = 0;
    let first = 0
    let second = 1;
    let three = 0;
    for(let i=2;i<=n;i++){
        three = (first+second)%1234567;
        first = second;
        second = three;
    }
    
    return three;
}