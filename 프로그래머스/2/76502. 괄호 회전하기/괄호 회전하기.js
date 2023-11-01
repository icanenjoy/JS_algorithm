function solution(s) {
    var answer = 0;
    s = s.split("");
    for(let i=0;i<s.length;i++){
        const ss = [...s];
         for(let j=0;j<ss.length;j++){
             if(ss[j]==="]"&&ss[j-1]==="["||ss[j-1]==="{"&&ss[j]==="}"||ss[j-1]==="("&&ss[j]===")"){
                 ss.splice(j-1,2);
                 j=j-2;
             } 
             else if(ss[j]==="]"||ss[j]==="}"||ss[j]===")"){
                 break;
             }
         }
        
         if(ss.length===0) answer++;
         s.push(s[0]);
         s.shift();
    }
    
    return answer;
}

