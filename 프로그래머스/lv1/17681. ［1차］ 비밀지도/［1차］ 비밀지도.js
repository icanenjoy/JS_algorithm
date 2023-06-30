function solution(n, arr1, arr2) {
    var answer = [];
    let arr1ans = [];
    let arr2ans = [];
    for(let i=0;i<n;i++){
        two = arr1[i].toString(2); //첫번째 배열을 이진수로 바꾸기
        while(two.length<n){ //길이맞추기
            two = 0+two;
        }
        arr1ans.push(two); //배열에 넣기
        
        two = arr2[i].toString(2);
        while(two.length<n){
            two = 0+two;
        }
        arr2ans.push(two);   
    }
    
    for(let i=0;i<n;i++){
        let anspush = ""
        for(let j=0;j<n;j++){
            console.log(arr1ans[i][j], arr2ans[i][j])
            if(arr1ans[i][j]==="0"&& arr2ans[i][j]==="0") anspush += " ";
            else anspush += "#";
        }
    
        answer.push(anspush);
    }
    return answer;
}