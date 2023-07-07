function solution(a, b) {
    const date = new Date(2016, a - 1, b);
    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    

  return days[date.getDay()];
}

function solution1(a, b) {
    var answer = '';
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]
    const day = ["FRI","SAT","SUN","MON","TUE","WED","THU"]
    let dates = b;
    for(let i=0;i<a-1;i++) dates += month[i]
    return day[dates%7-1]
}