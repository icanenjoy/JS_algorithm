function solution(id_list, report, k) {
    var answer = [];
    report = [...new Set(report)]; //중복제거
    const reported = {}
    const email = {}
    for(let i=0;i<id_list.length;i++){ //id 객체만들기
        reported[id_list[i]] = 0;
        email[id_list[i]] = 0;
    }
    for(let i=0;i<report.length;i++){ //신고당한 애들
        report[i]=report[i].split(" ");
        reported[report[i][1]] += 1;
    }
    const stop = [];
    for(let i=0;i<id_list.length;i++){ //정지된 애들
        if(reported[id_list[i]]>=k) stop.push(id_list[i]) 
    }
    
    for(let i=0;i<stop.length;i++){
        for(let j=0;j<report.length;j++){
            if(stop[i]===report[j][1]) email[report[j][0]] +=1;
        }
    }
    for(let i=0;i<id_list.length;i++){
        answer.push(email[id_list[i]]);
    }
    return answer;
}