function solution(s) {
    let check = true;
    return s.toLowerCase().split("").map((char)=>{
        if(char===" ") {check=true; return char;} 
        else if(check){
            check=false;
            return char.toUpperCase();
        }
        return char;
    }).join("");
    //문자열 소문자로 만들고 공백기준으로 나눈다.
    //문자열 하나를 받아서 첫문자가 문자라면 대문자만들기 처리를 해주고 아니면 그냥 리턴한다.
    //그렇게 만들어진 배열들을 합쳐서 리턴한다. 
}