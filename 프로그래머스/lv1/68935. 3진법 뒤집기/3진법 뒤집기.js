function solution(n) {
    var answer = n.toString(3); // 되네..?
    answer = answer.split("").reverse().join("");
    answer = parseInt(answer,3);
    
    return answer;
}





function solution1(n) { //3번 케이스가 자꾸만 틀린다. 갈아엎자
    var answer = "";
    //n.toString(3); toString은 2,8,16만 된다..
    let threecheck = 1;
    let three = 3;
    while(n>three){
        three *= 3;
        threecheck++;
    }
    
    three = Math.floor(three/3);
    ten = three;
    if(n===3) {
        threecheck=2;
        three=3;
        ten = three;
    }
    for(let i=0;i<threecheck;i++){
        if(n>=three*2){
            answer += "2";
            n -= three*2
        } 
        else if(n>=three){
            answer += "1";
            n -= three;
        } 
        else if(n<three){
            answer += "0";
        } 
        three /=3;
    }
    
    answer = answer.split("").reverse();
 
    let ans = 0;

    for(let i=0;i<threecheck;i++){
        console.log(ans,ten)
        ans += ten*parseInt(answer[i])
        ten = Math.floor(ten/3);
        
    }
    
    return ans;
}