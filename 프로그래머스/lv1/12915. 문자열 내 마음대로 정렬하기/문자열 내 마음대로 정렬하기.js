
function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a,b)=> {
        if(a.charCodeAt(n)===b.charCodeAt(n)) return a.localeCompare(b)
        else return a.charCodeAt(n)-b.charCodeAt(n);
    })
               
    return answer;
}