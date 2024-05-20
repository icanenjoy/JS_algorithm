function solution(arr)
{
    const ans = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== arr[i+1]){
            ans.push(arr[i]);
        }
    }
    return ans;
}


function solution1(arr)
{
    const answer=[];
    for(let i=0;i<arr.length;i++){
        if(answer[answer.length-1]!==arr[i])
            answer.push(arr[i]);
    }
    
    return answer;
}

function solution1(arr)
{
    var answer = [arr[0]]; //처음값 저장
    for(let i=1;i<arr.length;i++){ //arr 값 모두 확인
        if(arr[i-1]!==arr[i]) //뒤에 값과 다르면
            answer.push(arr[i]) //정답 배열에 저장
        
    }
    
    return answer;
}