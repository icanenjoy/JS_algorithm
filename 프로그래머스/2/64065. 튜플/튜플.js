function solution(s) {
    var answer = [];
    const arr = [];
    s = s.split(/[{}]+/).filter(item => item.trim() !== "");
    for(let i=0;i<s.length;i++){
        if(s[i]===",") continue;
        arr.push(s[i].split(",").map(Number));
    }
    arr.sort((a, b) => a.length - b.length);

    for(let i=0;i<arr.length;i++){
        let result = arr[i].find(item => !answer.includes(item));
        answer.push(result);
    }
    return answer
}