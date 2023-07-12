function solution(dartResult) {
    var answer = [];
    let score = "";
    for(let i=0;i<dartResult.length;i++){
        if(!isNaN(parseInt(dartResult[i]))) score += dartResult[i];
        else if(dartResult[i]==="S"){
            answer.push(parseInt(score))
            score="";
        }else if(dartResult[i]==="D"){
            answer.push(parseInt(score)**2)
            score="";
        }else if(dartResult[i]==="T"){
            answer.push(parseInt(score)**3)
            score="";
        }else if(dartResult[i]==="*"){
            answer[answer.length-1] *= 2 
            answer[answer.length-2] *= 2
        }else if(dartResult[i]==="#"){
            answer[answer.length-1] *= -1 
        }
        
    }
    return answer.reduce((a,b)=>a+b);
}