function solution(nums) {
    var answer = 0;
    let ansarr = [];
    for(let i=0;i<nums.length-2;i++){
        for(let j=i+1;j<nums.length-1;j++){
            for(let k=j+1;k<nums.length;k++){
                if((nums[i]+nums[j]+nums[k])%2!==0 && (nums[i]+nums[j]+nums[k])%3!==0) ansarr.push(nums[i]+nums[j]+nums[k])  
            }
        }
    }
    for(let i=0;i<ansarr.length;i++){
        let check = 0;
        for(let j=4;j<ansarr[i];j++){
            if(ansarr[i]%j===0){
                check=1;
                break;
            }
        }
        if(check===0) answer++;
    }
    
    
    return answer;
}