function solution(s, skip, index) {
    var answer = '';
    let char = '';//스킵을 제외한 문자들 모으기 위함
    for(let i=97;i<123;i++){ //스킵을 제외한 문자들
        if(skip.indexOf(String.fromCharCode(i))===-1) char += (String.fromCharCode(i));
    }
    
    for(let i=0;i<s.length;i++){ //바꿔야하는 문자열
        for(let j=0;j<skip.length;j++){ // 아무리건너뛰어도 skip길이를 넘지 않음
            let changeidx = char.indexOf(s[i])+index+j; //인덱스값 구하고
            if(changeidx>=char.length) changeidx %= char.length; //길이조정
            if(char[changeidx]!==-1){ //skip이라 char에 없으면 넘어가고, 있으면
                answer +=char[changeidx]; //저장하기
                break;
            }
        }
    }
    return answer;
}