function solution(n, computers) {
    function dfs(i){
        const stack = [i];
        while(stack.length){
            const current = stack.pop();
            for(let i=0;i<n;i++){
                if(computers[current][i]===1&&!visited[i]){
                    visited[i] =true;
                    stack.push(i);
                }
            }
        }
    }
    
    let visited = new Array(n).fill(false);
    let ans = 0;
    for(let i=0;i<n;i++){
        if(!visited[i]){
            visited[i]=true;
            dfs(i);
            ans++;
            
        }
    }
    return ans;
}