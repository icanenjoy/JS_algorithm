function solution(number) {
    let ans =0;
    for(let first=0;first<number.length-2;first++){
        for(let second=first+1;second<number.length-1;second++){
            for(let third=second+1;third<number.length;third++){
                if(number[first]+number[third]+number[second]===0) ans++;
            }
        }
    }
    return ans;
}

function solution1(number) {
    var answer = 0;
    
    for(let first=0; first<number.length-2;first++){ //첫 번째 친구
        for(let second=first+1; second<number.length-1;second++){ //두 번째 친구
            for(let third=second+1; third<number.length;third++){ //세 번째 친구
                if(number[first]+number[second]+number[third]===0) answer++; //더해서 0이면 올려주기
            }
        }
    }
    
    return answer;
}