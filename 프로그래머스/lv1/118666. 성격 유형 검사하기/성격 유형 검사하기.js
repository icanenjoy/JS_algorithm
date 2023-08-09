function solution(survey, choices) {
    const score = {"1":3,"2":2,"3":1,"4":0,"5":1,"6":2,"7":3}
    const mbti = {"R":0,"T":0, "C":0,"F":0,"J":0,"M":0,"A":0,"N":0}
    var answer = '';
    for(let i=0;i<survey.length;i++){
        let check = choices[i]<4?survey[i][0]:survey[i][1];
        mbti[check] += score[choices[i]];
    }
    console.log(mbti)
    answer += mbti["R"]<mbti["T"]? "T":"R";
    answer += mbti["C"]<mbti["F"]? "F":"C";
    answer += mbti["J"]<mbti["M"]? "M":"J";
    answer += mbti["A"]<mbti["N"]? "N":"A";
    
    return answer;
}