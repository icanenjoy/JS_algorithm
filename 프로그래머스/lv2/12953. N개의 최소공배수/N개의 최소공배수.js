function solution(arr) {
    var answer = 0;
    arr = arr.sort((a,b)=>a-b);
    for(let i=1;;i++){
        answer = i*arr[arr.length-1]
        for(let j=0;j<arr.length;j++){
            if(answer%arr[j]!==0){
                answer=0;
                break;
            }
        }
        if(answer) break;
    }
    return answer;
}