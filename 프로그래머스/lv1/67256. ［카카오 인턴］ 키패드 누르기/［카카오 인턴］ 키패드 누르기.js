function solution(numbers, hand) {
    let answer = '';
    let left = '*'; //초기위치
    let right = '#'; //초기위치
    const distance = {
        2:{'1':1,'2':0,'3':1,'4':2,'5':1,'6':2,'7':3,'8':2,'9':3,'*':4,'0':3,'#':4},
        5:{'1':2,'2':1,'3':2,'4':1,'5':0,'6':1,'7':2,'8':1,'9':2,'*':3,'0':2,'#':3},
        8:{'1':3,'2':2,'3':3,'4':2,'5':1,'6':2,'7':1,'8':0,'9':1,'*':2,'0':1,'#':2},
        0:{'1':4,'2':3,'3':4,'4':3,'5':2,'6':3,'7':2,'8':1,'9':2,'*':1,'0':0,'#':1},
    }//예외되는 숫자 거리값.. 이게 맞나..
    
    
    for(let i=0;i<numbers.length;i++){ //누르는 숫자횟수만큼 돌기
        if(numbers[i]===1||numbers[i]===4||numbers[i]===7) answer += 'L'; //1,4,7 왼손
        else if(numbers[i]===3||numbers[i]===6||numbers[i]===9) answer += 'R'; //3,6,9 오른손
        else { //2,5,8,0 처리
            const [ldis,rdis] = [distance[numbers[i]][left],distance[numbers[i]][right]];//거리구하기
            if(ldis===rdis) answer += hand==="right"? 'R':'L'; //같으면 잡이를 따름
            else answer += ldis>rdis ? 'R':'L'; //다르면 더 작은 값
        }
        answer[i]==='L'? left=numbers[i].toString():right = numbers[i].toString();
    }
    
    return answer;
}