function solution(n, m, section) {
    var answer = 0;
    let distanse = 0;
    while(distanse<section.length){
        answer++;
        const last = section[distanse]+m-1
        if(section[section.length-1]<=last) break;
        for(let j=distanse+1;j<section.length;j++){
            if(section[j] >last){
                distanse=j;
                break;
            }
        }
    }
    return answer;
}