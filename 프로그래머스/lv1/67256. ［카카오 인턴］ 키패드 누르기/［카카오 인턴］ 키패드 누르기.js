function solution(numbers, hand) {
    let answer = '';
    let left = '*';
    let right = '#';
    const distance = {
        2:{'1':1,'2':0,'3':1,'4':2,'5':1,'6':2,'7':3,'8':2,'9':3,'*':4,'0':3,'#':4},
        5:{'1':2,'2':1,'3':2,'4':1,'5':0,'6':1,'7':2,'8':1,'9':2,'*':3,'0':2,'#':3},
        8:{'1':3,'2':2,'3':3,'4':2,'5':1,'6':2,'7':1,'8':0,'9':1,'*':2,'0':1,'#':2},
        0:{'1':4,'2':3,'3':4,'4':3,'5':2,'6':3,'7':2,'8':1,'9':2,'*':1,'0':0,'#':1},
    }
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]===1||numbers[i]===4||numbers[i]===7){
            answer += 'L';
            left = numbers[i].toString();
        } else if(numbers[i]===3||numbers[i]===6||numbers[i]===9){
            answer += 'R';
            right = numbers[i].toString();
        } else {
            const ldis = distance[numbers[i]][left];
            const rdis = distance[numbers[i]][right];
            if(ldis>rdis){
                answer += 'R';
                right = numbers[i].toString();
            } else if (ldis<rdis){
                answer += 'L';
                left = numbers[i].toString();
            } else if(ldis===rdis){
                answer += hand==="right"? 'R':'L';
                hand==='right' ? right = numbers[i].toString() : left = numbers[i].toString();
            }
        }
    }
    
    return answer;
}

147
369