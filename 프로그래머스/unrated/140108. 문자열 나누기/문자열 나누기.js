function solution(s) {
    var answer = 0;
    let result = [];
    let x = s[0];
    let xcount =1;
    let notxcount = 0;
    let startidx =0;
    for(let i=1;i<=s.length;i++){
        
        if(xcount===notxcount || i===s.length){
            if(i===s.length-1){
                result.push(s[i-1])
            }
            result.push(s.slice(startidx,i))
            startidx = i;
            x = s[i];
            xcount = 1;
            notxcount = 0;
            i++;
        } 
        s[i]===x ? xcount++ : notxcount++;
    }
    return result.length;
}