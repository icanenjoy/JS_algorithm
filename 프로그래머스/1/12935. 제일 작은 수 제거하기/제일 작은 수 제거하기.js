function solution(arr) {
    if(arr.length===1) return [-1];
    let remN = Math.min(...arr);
    console.log(remN)
    return arr.filter(a => a !==remN);
}


function solution1(arr) {

    let location = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[location]>arr[i])
            location = i;
    }
    
    if(arr.length===1) arr[0]=-1;
    else arr.splice(location,1);
    return arr;
}

function solution2(arr) { //gpt
  const min = Math.min(...arr); //arr의 최소값 구하기
  const location = arr.indexOf(min); //min의 인덱스 구하기
    
  arr.length === 1 ? arr = [-1] : arr.splice(location,1); //길이가 1이면 -1, 아니면 하나빼서 반환
    return arr;
}