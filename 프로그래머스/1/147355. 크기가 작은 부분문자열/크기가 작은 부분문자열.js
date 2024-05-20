function solution(t, p) {
    let ans =0;
    let num = "";
    for(let i=0;i<t.length;i++){
        num+=t[i];
        if(num.length===p.length){
            if(num<=p)
                ans++;
            num = num.slice(1);
        }
            
    }
    return ans;
}



function solution1(t, p) {
    var answer = 0;
    let answers = t.length-p.length+1; //부분 문자열 개수
    for(let i=0;i<answers;i++){ 
        let test ="";
        for(let j=i;j<i+p.length;j++){
            test += t[j]; //부분 문자열 추출
        }
        if(parseInt(test)<=parseInt(p)) answer++; //부분 문자열이 p보다 작거나 같으면 +
    }
    return answer;
}