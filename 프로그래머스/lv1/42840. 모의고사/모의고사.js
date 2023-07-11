function solution(answers) {
    var answer = [];
    const first = [1,2,3,4,5]
    const second = [2,1,2,3,2,4,2,5]
    const third = [3,3,1,1,2,2,4,4,5,5]
    let firstans = 0;
    let secondans = 0;
    let thirdans = 0;
    for(let i=0;i<answers.length;i++){
        if(first[i%5]===answers[i]) firstans++;
        if(second[i%8]===answers[i]) secondans++;
        if(third[i%10]===answers[i]) thirdans++;
    }
    const ansarr = [firstans, secondans, thirdans];
    const maxans = Math.max(...ansarr);
    for(let i=0;i<3;i++){
        if(ansarr[i]===maxans) answer.push(i+1)
    }

    return answer;
}