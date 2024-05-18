function solution(price, money, count) {
    let howmuch = 0;
    for(let i=1;i<=count;i++){
        howmuch += price*i;
    }
    return howmuch-money>0?howmuch-money:0
}


function solution(price, money, count) {

    for(let i=1;i<=count;i++){
        money -= price*i;
    }
    return money>0 ? 0: -money
}