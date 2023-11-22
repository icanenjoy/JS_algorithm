function solution(phone_book) {
    const phone = {};
    let answer=true;
    phone_book.sort().forEach((number)=>{
        let front = "";
        for(let i=0;i<number.length;i++){
            front+=number[i];
            if(phone[front]) answer = false;
        }
        phone[number]=true;
    })
    
    return answer;
}


function first_solution(phone_book) {
    phone_book = phone_book.sort();
    for(let i = 0;i< phone_book.length-1;i++){
        for(let j=i+1;j<phone_book.length;j++){
            let check = true;
            if(phone_book[i].length>phone_book[j].length) break;
            if(phone_book[i][0]!==phone_book[j][0]) break;
            for(let k=0;k<phone_book[i].length;k++){
                if(phone_book[i][k]!==phone_book[j][k]) {
                    check=false;
                    break;
                }
            }
            if(check) return false;
            else if(!check) break;
        }
    }
    return true;
}