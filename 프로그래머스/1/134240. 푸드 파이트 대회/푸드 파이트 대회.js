function solution(food) {
    let ans = "";
    for(let i=1;i<food.length;i++){
        for(let j=0;j<Math.floor(food[i]/2);j++){
            ans+=i.toString();
        }
    }
    return ans+"0"+(ans.split("").reverse().join(""));
}



function solution1(food) {
    var answer = '';
    for(let i=1;i<food.length;i++){ //3,4,6 돌기
        for(let j=0;j<Math.floor(food[i]/2);j++){ //양쪽이니까 절반만 + 홀수개면 하나버림
            answer += i; //answer에 저장 
        }
    }
    //왼쪽선수의 값만 저장된 상태
    let anotherans = answer.split("").reverse().join(""); //오른쪽 선수의 값을 만들기 위해 뒤집기
    answer += '0'+anotherans; //가운데 물과 오른쪽 선수의 값을 저장
    return answer;
}


function likesolution(food) { //다른사람 풀이
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    } //i값을 문자열로 바꾸고 절반만큼 반복. repeat()함수 쓰기

    return res + '0' + [...res].reverse().join(''); //spilt()말고 [...a]쓰면 배열되네
}