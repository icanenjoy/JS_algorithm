function solution(arr)
{
    var answer = [arr[0]];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]!==arr[i])
            answer.push(arr[i])
    }
    
    return answer;
}