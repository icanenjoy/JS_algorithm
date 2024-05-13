function solution(num) {
    let ans =0;
    if(num===1) return 0;
    
    while(num!==1){
        if(num%2===0) num = num/2;
        else if(num%2===1) num = num*3+1;
        
        if(ans===500) return -1
        ans++;
        console.log(num);
    }
    return ans;
}