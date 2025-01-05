function solution(numbers) {
    let maxNum = numbers.pop();
    const ans = [-1];
    let stack = [maxNum];
    for(let i=numbers.length-1;i>=0;i--){
        if(numbers[i]>=maxNum){
            maxNum = numbers[i];
            ans.push(-1);
            stack = [maxNum];
        }else{
            while(1){
                if(stack[0]>numbers[i]){
                    ans.push(stack[0])
                    stack.unshift(numbers[i]);
                    break;
                }else{
                    stack.shift();
                }
            }
        }
    }
    return ans.reverse();
}