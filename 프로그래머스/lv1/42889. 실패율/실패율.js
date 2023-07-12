function solution(N, stages) {
    var answer = [];
    let challenge = stages.length;
    for(let i=1;i<=N;i++){
        let stage = 0;
        for(let j=0;j<stages.length;j++){
            if(i===stages[j]) stage++;
        }
        if(stage){
            answer.push(stage/challenge);
            challenge -= stage;
        }else answer.push(0);
    }
    let ans = [...answer];
    answer.sort((a,b)=>b-a);
    let result = [];
    for(let i=0;i<ans.length;i++){
        result.push(ans.indexOf(answer[i])+1);
        ans[ans.indexOf(answer[i])] = -1;
    }
    return result;
}