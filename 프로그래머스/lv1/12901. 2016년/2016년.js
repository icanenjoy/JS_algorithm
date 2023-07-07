function solution1(a, b) {
    const date = new Date(2016, a - 1, b);
    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    return days[date.getDay()];
}

function solution(a, b) { //2016년 a월 b일이 실제로 없는 날이라는줄 알고 짠 코드
    var answer = '';
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    let dates = b;
    for(let i=0;i<a-1;i++) dates += month[i]
    return day[(dates-1)%7]
}