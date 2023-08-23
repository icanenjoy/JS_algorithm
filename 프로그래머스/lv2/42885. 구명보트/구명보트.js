function solution(people, limit) {
    var answer = 0;
    people = people.sort((a,b)=>b-a);
    for(let i=0;i<people.length;i++){
        const maxP = people[i];
        if(maxP+people[people.length-1]<=limit) people.pop();
        answer++;
    }
    return answer;
}