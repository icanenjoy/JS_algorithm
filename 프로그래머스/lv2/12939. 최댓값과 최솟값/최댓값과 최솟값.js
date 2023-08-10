function solution(s) {
    var answer = '';
    s = s.split(" ").map(Number); //s 공백기준으로 나눠서 숫자만들기
    answer += Math.min(...s); //가장 작은 값 넣기
    answer = answer + " "+Math.max(...s);  //가장 큰 값 넣기
    return answer;
}