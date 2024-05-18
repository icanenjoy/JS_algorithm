function solution(arr1, arr2) {
    let ans = [];
    for(let i=0;i<arr1.length;i++){
        ans[i] = [];
        for(let j=0;j<arr1[0].length;j++){
            ans[i][j] = arr1[i][j]+arr2[i][j];
        }
    }
    return ans;
}

function solution1(arr1, arr2) {
    var answer = [];
    let ans = [];
    for(let i = 0; i<arr1.length;i++){
        ans = [];
        for(let j=0; j<arr1[i].length;j++){
            ans.push(arr1[i][j]+arr2[i][j]);
        }
        answer.push(ans);
    }
    return answer;
}