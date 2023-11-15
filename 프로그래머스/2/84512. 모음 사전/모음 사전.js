function solution(word) {
    var answer = 0;
    let alph = ['A','E','I','O','U'];
    let check ='';
    for(let i=0;i<alph.length;i++){
        for(let j=0;j<alph.length;j++){
            if((alph[i]+alph[j]).length>5) continue;
            alph.push(alph[i]+alph[j]);
        }
    }
    alph = [...new Set(alph)].sort();
    return alph.indexOf(word)+1;
}