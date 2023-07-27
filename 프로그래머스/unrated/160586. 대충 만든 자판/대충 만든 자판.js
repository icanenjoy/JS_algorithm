function solution(keymap, targets) {
    var answer = [];
    for(let i=0;i<targets.length;i++){ //한단어
        answer[i]=0;
        for(let j=0;j<targets[i].length;j++){ //한글자
            let count=-1;
            
            for(let k=0;k<keymap.length;k++){
                const char = keymap[k].indexOf(targets[i][j])+1;
                if(char>0&&count===-1) count = char;
                else if(char>0&&count>0) count = count> char ? char : count;
            }
            if(answer[i]>=0) answer[i] = (count===-1 ? -1 : answer[i]+count);
        }
    }
    return answer;
}