function solution(cacheSize, cities) {
    var answer = cities.length*5;
    let cache = [];
    var cities = cities.map((str)=>{
        return str.toLowerCase();
    });
    
    if(cacheSize===0) return answer;
    
    for(let i=0;i<cities.length;i++){
        for(let j=0;j<cache.length;j++){
            if(cache[j]===cities[i]){
                answer -= 4;
                cache.splice(j,1);
                }
            }
        if(cache.length===cacheSize) cache.shift();
        cache.push(cities[i]);
        
    }
    return answer;
    
}
    
    
//     let check = cacheSize>cities.length ? cities.length:cacheSize;
//     for(let i=1;i<check;i++){
//         for(let j=0;j<i;j++){
//             if(cities[i]===cities[j]) {
//                 answer -=4;
//                 break;
//             }
//         }
//     }
    
//     if(cacheSize>=cities.length) return answer;
    
//     for(let i=cacheSize;i<cities.length;i++){
//         for(let j=i-cacheSize;j<i;j++){
//             if(cities[i]===cities[j]) {
//                 answer -=4;
//                 break;
//             }
//         }
//     }
//     return answer;
// }