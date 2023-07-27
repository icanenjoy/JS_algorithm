function solution(s, skip, index) {
    var answer = '';
    let char = '';
    for(let i=97;i<123;i++){
        if(skip.indexOf(String.fromCharCode(i))===-1) char += (String.fromCharCode(i));
    }
    for(let i=0;i<s.length;i++){
        for(let j=0;j<skip.length;j++){
            let changeidx = char.indexOf(s[i])+index+j;
            if(changeidx>=char.length) changeidx %= char.length;
            if(char[changeidx]!==-1){
                answer +=char[changeidx];
                break;
            }
        }
    }
    return answer;
}