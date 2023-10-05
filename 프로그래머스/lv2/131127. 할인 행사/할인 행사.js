function solution(want, number, discount) {
    var answer = 0;
    for(let i=0;i<discount.length-9;i++){
        const check = [...Array(number.length)].fill(0);
        for(let j=i;j<i+10;j++){
            for(let x=0;x<want.length;x++){
                if(discount[j]===want[x]) check[x]++;
            }
        }
        let TF = true;
        for(let y=0;y<number.length;y++){
            if(number[y]>check[y]){
                TF=false;
                break;
            }
        }
        if(TF) answer++;
    }
    return answer;
}