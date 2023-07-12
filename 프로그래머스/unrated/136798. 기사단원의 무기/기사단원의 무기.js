function solution(number, limit, power) {
    let answer = 0;
    let powerCount = 1; // number가 1 이상이므로 초기값은 1로 설정
    
    for (let i = 1; i < number; i++) {
        let divisorCount = 0;
        for (let j = 1; j <= Math.sqrt(i + 1); j++) {
            if ((i + 1) % j === 0) {
                divisorCount += 2; // 약수는 쌍으로 존재하므로 2를 더해줌
            }
        }
        
        if (Math.sqrt(i + 1) % 1 === 0) {
            divisorCount--; // 제곱근이 정수인 경우 약수가 중복으로 계산되므로 1을 빼줌
        }
        
        if (divisorCount > limit) {
            divisorCount = power; // limit을 넘으면 power로 대체
        }
        
        powerCount += divisorCount;
    }
    
    return powerCount;
}


function solution1(number, limit, power) {
    var answer = 0;
    let powerarr = [1]; // number가 1이상이므로 
    for(let i=1;i<number;i++){ //index 1부터
        powerarr.push(0); //공간만들어주고
        for(let j=1;j<=i+1;j++){ // number에 있는 값들 하나씩 확인
            if((i+1)%j===0) //나누어 떨어지면 약수이므로
            powerarr[i]++; //하나올려줌
        }
        if(powerarr[i]>limit) powerarr[i] = power //만약 limit을 넘으면 power로 대체
    }
    return powerarr.reduce((a,b)=>a+b) //answer에 저장된 값들 더하기
}