function solution(numbers, target) {
    var answer = 0;
    dfs(0,0);
    
    function dfs(sum,index){
        if(index===numbers.length){ //끝에 도달했고
            if(sum===target){ // sum이 target과 같으면 
                answer+=1; //ans 올려줌
            }
            return
        }
        dfs(sum+numbers[index],index+1) //어떤 합에서 더해도 보고
        dfs(sum-numbers[index],index+1) //빼도 보기
    }
    
    
    return answer;
}