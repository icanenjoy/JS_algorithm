function solution(n, works) {
    works = works.sort((a,b)=>(a-b));
    const mm = works;
    if(mm.reduce((a,b)=>a+b,0)<=n) return 0;
    const check = [0];
    while(n>0){
        while(1){
            if(check[check.length-1] < works[works.length-1]) break;
            if(check[check.length-1] >= works[works.length-1]) works.push(check.pop());
        }
        let work = works.pop();
        let time = Math.min(work-works[works.length-1],n,work-check[check.length-1]);
        time = (time===0||isNaN(time))? 1:time;
        check.push(work-time);
        n = n-time;
    }
    return [...check,...works].reduce((a,b)=>(a+b*b),0);
}