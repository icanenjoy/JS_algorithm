function solution(arr) {
    var answer = arr.reduce((a,b)=>{return a+b;},0);
    answer = answer / arr.length;
    return answer;
}