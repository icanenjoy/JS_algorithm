function solution(n, m) {
    [n,m]=[n,m].sort((a,b)=>a-b);
    let ans =[1,m*n];
    for(let i=n;i>0;i--){
        if(n%i===0 && m%i===0){
            ans[0] = i;
            break;
        }
    }
    for(let i=1;i<m*n;i++){
        if(i%n===0&&i%m===0){
            ans[1] =i;
            break;
        }
    }
    return ans;
}



function solution1(n, m) {
    var answer = [];
    if(n>m){ //m이 무조건 n 보다 크도록함.
        const temp = n;
        n = m;
        m = temp;
    }
    
    for(let i=m;i>0;i--){ //최대공약수, 최대값부터 아래로 내려감
        if(m%i===0 && n%i===0){
            answer[0] = i; //찾으면 저장하고
            break; //정지
        }
    }
    
    for(let i=m;i<=m*n;i++){ //최소공배수, m부터 시작~m*n까지
        if(i%m===0 && i%n===0){ 
            answer[1] = i; //찾으면 저장하고
            break; //정지
        }
    }
    return answer;
}