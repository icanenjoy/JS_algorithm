function solution(s)
{
    const stack = []
    for(let i=0;i<s.length;i++){
        if(stack[stack.length - 1] === s[i]){
            stack.pop()
        }
        else{
            stack.push(s[i])
        }
    }

    return stack.length === 0 ? 1 : 0
}

function solution1(s)
{
    
    while (1) {
        let S = s.replace(/(.)\1/g, ''); //정규표현식 
        if (S === s)  break; 
        s = S;
    }

    return s.length===0? 1:0;
}