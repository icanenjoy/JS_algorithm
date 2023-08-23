function solution(brown, yellow) {
    var answer = [0,0];
    const yellowW = [];
    const yellowH = [];
    for (let i=1;i<=yellow/2+1;i++){
        if(yellow%i===0){
            yellowW.push(i);
            yellowH.push(yellow/i);
        } 
    }
    for(let i=0;i<yellowW.length;i++){
        if(yellowW[i]*2+yellowH[i]*2+4===brown){
            answer[0] = yellowH[i]+2;
            answer[1] = yellowW[i]+2;
            break;
        }
    }
    return answer;
}