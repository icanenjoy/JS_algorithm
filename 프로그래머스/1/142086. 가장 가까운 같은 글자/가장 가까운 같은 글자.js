function solution(s) {
    const ans = [-1];
    for(let i=1;i<s.length;i++){
        for(let j=i-1;j>=-1;j--){
            if(j===-1){
                ans.push(-1);
            }
            if(s[i]===s[j]){
                ans.push(i-j);
                break;
            }
        }
    }
    return ans;
}


function solution1(s) {
    var answer = [];
    for(let i=0;i<s.length;i++){ //하나 값 선택
        let check = -1; //기본값은 -1
        for(let j=0;j<i;j++){ //선택된 값을 기준으로 앞의 값과 비교
            if(s[i]===s[j]) // 같은 값이 있으면
                check = i-j; //거리구해서 변경
        }
        answer.push(check); //check값 저장
    }
    return answer;
}