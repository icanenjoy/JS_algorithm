function solution(strings, n) {
    return strings.sort((a,b)=>{
        if(a[n]===b[n]) return a.localeCompare(b)
        else return a[n].charCodeAt(0)-b[n].charCodeAt(0);      
    })
}

function solution1(strings, n) {
    var answer = [];
    answer = strings.sort((a,b)=> {
        if(a.charCodeAt(n)===b.charCodeAt(n)) return a.localeCompare(b)
        //a.localCompare(b) -> 사전정렬
        else return a.charCodeAt(n)-b.charCodeAt(n);
        //문자열 쌩으로 하면 정렬 안됨 
    })
               
    return answer;
}