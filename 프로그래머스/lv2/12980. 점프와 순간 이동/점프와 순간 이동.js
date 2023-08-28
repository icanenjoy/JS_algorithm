function solution(n)
{
    var ans = 0;
    
    while(1){
        if(n%2===1) {
            ans++;
            n--;
        }
        else if(n%2===0) n = n/2;
    
        if(n===0) break;
    }

    return ans;
}