function solution(clothes) {
    var answer = 1;
    const types = {};
    for(let i=0;i<clothes.length;i++){
        types[clothes[i][1]] = (types[clothes[i][1]]===undefined)? 1: types[clothes[i][1]]+1;
    }
    
    const keys = Object.keys(types);
    for(const key of keys){
        answer *= (types[key]+1);
    };
    
    return answer-1;
}