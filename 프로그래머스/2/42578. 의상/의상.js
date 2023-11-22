function solution(clothes) {
    var answer = 1;
    const types = {};
    
    clothes.forEach((item)=>{
        types[item[1]]? types[item[1]]++:types[item[1]]=1;
    })
    
    Object.keys(types).forEach((item)=>{
        answer *=(types[item]+1);
    })
    return answer-1;
}




function first_solution(clothes) {
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

//옷의 종류 1개:(a +1) -1 = a +1 -1
//옷의 종류 2개:(a +1)(b +1) -1 = ab +a +b +1 -1
//옷의 종류 3개:(a +1)(b +1)(c +1) -1 = abc +ab +ac +bc +a +b +c +1 -1