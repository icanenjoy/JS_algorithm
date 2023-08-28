function solution(n,a,b)
{
    var answer = 1;
    [a,b] = [a,b].sort((a,b)=>a-b);
    while(1){
        if(b-a===1&&a%2===1) break;
        a = Math.ceil(a/2)
        b = Math.ceil(b/2)
        answer++;
    }

    return answer;
}