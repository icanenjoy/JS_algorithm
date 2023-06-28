function solution(s, n) {
    var answer = '';
    for(let i=0;i<s.length;i++){
        const code = s[i].charCodeAt(0);
        if(s[i]===" "){ //공백이면 공백 넣어주고 넘어가기
            answer += " ";
             continue;
        }
        
        if(code>=65&& code<=90){ //A~Z
            if(code+n>90) answer += String.fromCharCode((s[i].charCodeAt(0)+n)-26);
            else answer += String.fromCharCode((s[i].charCodeAt(0)+n));
        } else if(code>=97&& code<=122){ //a~z
            if(code+n>122) answer += String.fromCharCode((s[i].charCodeAt(0)+n)-26);
            else answer += String.fromCharCode((s[i].charCodeAt(0)+n));
        } 
    }
    return answer;
}