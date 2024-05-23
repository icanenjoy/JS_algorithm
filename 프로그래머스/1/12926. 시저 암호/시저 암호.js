function solution(s, n) {
    const Alph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    s = s.split("");
    for(let i=0;i<s.length;i++){
        for(let j=0;j<Alph.length/2;j++){
            if(Alph[j]===s[i]) {
                s[i] = Alph[j+n];
                break;
            }
            else if(alph[j]===s[i]){
                s[i] = alph[j+n];
                break;
            }
        }
    }
    return s.join("");
}



function solution1(s, n) {
    var answer = '';
    for(let i=0;i<s.length;i++){
        let code = s[i].charCodeAt(0);
        if(s[i]===" "){ //공백이면 공백 넣어주고 넘어가기
            answer += " ";
             continue;
        }
        
        if(code>=65 && code<=90){ //A~Z
            if(code+n>90) answer += String.fromCharCode(code+n-26); //만약 z를 넘어가면 -26해줌
            else answer += String.fromCharCode(code+n); // 안 넘어가면 그냥 더해줌
        } else if(code>=97&& code<=122){ //a~z 위에꺼랑 안에 코드가 같아서 제활용 하고 싶었지만 실패했다.
            if(code+n>122) answer += String.fromCharCode(code+n-26);
            else answer += String.fromCharCode(code+n);
        } 
    }
    return answer;
}