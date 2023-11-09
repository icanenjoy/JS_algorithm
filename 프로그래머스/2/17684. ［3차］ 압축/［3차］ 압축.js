function solution(msg) {
    var answer = [];
    const alph = {"A":1,"B":2,"C":3,"D":4,"E":5,"F":6,"G":7,"H":8,"I":9,"J":10,"K":11,"L":12,"M":13,"N":14,"O":15,"P":16,"Q":17,"R":18,"S":19,"T":20,"U":21,"V":22,"W":23,"X":24,"Y":25,"Z":26}
    //알파벳 객체
    
    
    for(let i=0;i<msg.length;i++){
        let wc = msg[i]; //첫글자 넣기
        for(let j=i+1;j<msg.length;j++){
            wc += msg[j]; //다음 글자 넣고
            i++; //시작 글자 순번 옮겨주기
            if(alph[wc]===undefined){ //글자묶음 없으면 
                alph[wc] = Object.keys(alph).length+1; //새로 등록한 후
                i--; //시작 글자 순번 옮겨주고 
                wc = wc.slice(0,-1); //새로 등록한 글자에서 한글자를 뺀 단어를 wc로 만들기
                break;//새로 단어 등록 했으므로 종료
            }
        }
        answer.push(alph[wc]);//기존 등록된 단어인 wc의 값을 answer에 추가
    }
    return answer;
}