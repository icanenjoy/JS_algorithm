function solution(today, terms, privacies) {
    var answer = [];
    const type_term = {}
    for(let i=0;i<terms.length;i++){
        terms[i] = terms[i].split(" ")
        type_term[terms[i][0]]=parseInt(terms[i][1]);
    }
    
    today = today.split(".").map(Number);
    
    for(let i=0;i<privacies.length;i++){
        privacies[i] = privacies[i].split(" ");
        const type = privacies[i][1];
        privacies[i][0] = privacies[i][0].split(".").map(Number);
        privacies[i][0][0] = privacies[i][0][0]+parseInt((privacies[i][0][1]+type_term[type]-1)/12);
        privacies[i][0][1] = (privacies[i][0][1]+type_term[type])%12
        if(privacies[i][0][1]===0) privacies[i][0][1]=12
        
        if(today[0]>privacies[i][0][0]) answer.push(i+1);
        else if(today[0]===privacies[i][0][0]&&today[1]>privacies[i][0][1]) answer.push(i+1);
        else if(today[0]===privacies[i][0][0]&&today[1]===privacies[i][0][1]&&today[2]>=parseInt(privacies[i][0][2])) answer.push(i+1);
        
    }
    return answer;
}