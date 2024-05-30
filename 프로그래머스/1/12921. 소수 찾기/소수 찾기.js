function solution(n) {
    const isPrime = new Array(n+1).fill(true);
    [isPrime[0],isPrime[1]] = [false,false];
    for(let i=2;i<=n;i++){
        if(!isPrime[i]) continue;
        for(let j=i+i;j<=n;j+=i){
            isPrime[j] = false;
        }
    }
    return isPrime.filter(a=> a===true).length;
}



function solution1(n) { //gpt로 개선한 코드
    let answer = 0;
    const isPrime = new Array(n+1).fill(true); //0부터 n까지의 배열 만들고 전부 true로 채우기
    isPrime[0] = false;//0은 소수가 아님
    isPrime[1] = false; //1도 소수가 아님
    
    for(let i=2;i*i<n;i++){ //2다음 4인데 4가 n이하이면 제외할게 없음
        if(isPrime[i]){ //true면 아직 제외되지 않았으니 소수임
            for(let j=i*i;j<=n; j+=i) isPrime[j] = false;//i의 배수들을 제외하기 위해, 시작은 4부터 그다음은 6,8,,,
        }
    }
    for(let i=2;i<=n;i++) if(isPrime[i]) answer++;
    return answer;
}





function solution1(n) { //시간초과
    if(n<=6){ //2,3,4,5일때
        return n===2 ? 1: n<4 ? 2:3  //2->1  3->2  4,5,6->3
    }
    let num=[2,3,5]; //2,3,4,5 처리해서 기본으로 갖는 소수
    for(let i=7; i<=n;i++){ //7~n까지
        let check=0;
        for(let j=0;j<num.length;j++){ //num배열에 소수들로 나누기
            if(i%num[j]===0){ //나누어 떨어지면 소수가 아니므로 
                check=1; //바꾸고
                break;//멈추기
            } 
        }
        if(check===0){ //소수면
            num[num.length] = i //num에 저장
        }
    }
    return num.length //소수개수
}


function solution2(n) { // gpt코드
    const isPrime = new Array(n + 1).fill(true); // 소수 판별 배열 생성
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) { 
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false; // i의 배수들은 소수가 아님
            }
        }
    }

    let count = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            count++;
        }
    }

    return count;
}