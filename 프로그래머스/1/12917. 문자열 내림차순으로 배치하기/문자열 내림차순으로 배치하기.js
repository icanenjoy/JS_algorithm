function solution(s) {
    return s.split("").sort((a,b)=>b.charCodeAt(0)-a.charCodeAt(0)).join("");
}



function solution(s) {
    //하나씩 쪼개고, 유니코드 전환해서 오름차순 정렬, 다시붙이기 
    //a.charCodaAt : 유니코드 전환
    // b-a : 오름차순, a-b : 내림차순
    return s.split("").sort((a,b)=>b.charCodeAt(0)-a.charCodeAt(0)).join("");
}