function solution(array, commands) {
    const ans = [];
    commands.forEach((command)=>{
        ans.push(array.slice(command[0]-1, command[1]).sort((a,b)=>a-b)[command[2]-1])
    })
    return ans;
}


function solution1(array, commands) {
    //배열을 자르고 정렬해서 commands에 있는 세번째 값번째의 값을 answer배열에 저장
    var answer = [];
    for(let i=0;i<commands.length;i++){
        //sort(a,b=>a-b)안넣어주면 이상하게 정렬되서 틀림
        answer.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=> a-b)[commands[i][2]-1]);
    }
    return answer;
}