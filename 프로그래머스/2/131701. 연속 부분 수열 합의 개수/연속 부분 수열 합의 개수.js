function solution(elements) {
    var answer = [];
    sum=0;
    elements = elements.concat(elements);
    for(let i=0;i<elements.length/2;i++){ //시작지점
        sum=0;
        for(let j=i;j<elements.length/2+i;j++){
            sum += elements[j];
            answer.push(sum);
        }
    }
    answer = [...new Set(answer)];
    return answer.length;

}