function solution(n, words) {
    var answer = [1,1];
    const pass = [words[0]];
    let check = false;
    
    for(let i=1;i<words.length;i++){
        console.log(answer)
        const person  = i%n+1;
        answer[0] = person===0? n : person;
        if(person===1) answer[1]++;
        const lastword = pass[pass.length-1];
        if(lastword[lastword.length-1]===words[i][0]&&words.length>1&&pass.indexOf(words[i])===-1) pass.push(words[i])
        else {
            check = true;
            break;
        }
        
    }
    
    return check ? answer:[0,0]

}