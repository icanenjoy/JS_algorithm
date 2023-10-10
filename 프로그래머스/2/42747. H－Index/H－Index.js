function solution(citations) {
    var answer = 0;
    citations = citations.sort((a,b)=> a-b);
    for(let i=citations.length-1;i>=0;i--){
        //if(citations[i]<= citations.length-i) return citations.length-i;
        if(citations[citations.length-i-1]>i+1) return i+1;
    }
    return answer;
}

//0 1 3 5 6