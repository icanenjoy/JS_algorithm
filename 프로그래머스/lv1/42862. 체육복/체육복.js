function solution(n, lost, reserve) {//5개
    var answer = n-lost.length;//잃어버린 애들 제외한 값이 최소값
    lost = lost.sort((a,b)=>a-b);
    reserve = reserve.sort((a,b)=>a-b);
    for(let i=0;i<lost.length;i++){
        if(reserve.includes(lost[i])){ //여분으로 가져온 애들중에 내가 여분이 있나?
            reserve[reserve.indexOf(lost[i])] = -99;
            lost[i] = -1;
            answer++;
        }
    }
    for(let i=0;i<reserve.length;i++){ //잃어버린 애들 돌면서
        if(lost.includes(reserve[i]-1)){ //여분으로 가져온 애들중에 앞에 친구가 여분이 있나?
            lost[lost.indexOf(reserve[i]-1)] = -1;
            answer++;
        } else if(lost.includes(reserve[i]+1)){ //여분으로 가져온 애들중에 앞에 친구가 여분이 있나?
            lost[lost.indexOf(reserve[i]+1)] = -1;
            answer++;
        }
    }
    
    return answer;
}