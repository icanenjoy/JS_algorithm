function solution(str1, str2) {
    var answer = 0;
    let str1str = [];
    let str2str = [];
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for(let i=0;i<str1.length-1;i++){
        const str = str1[i]+str1[i+1];
        if(/^[a-z]+$/.test(str)) str1str.push(str);
    }
    for(let i=0;i<str2.length-1;i++){
        const str = str2[i]+str2[i+1];
        if(/^[a-z]+$/.test(str)) str2str.push(str);
    }
    if(str1str.length===0&&str2str.length===0) return 65536;
    [str1str,str2str] = str1str.length>str2str.length?[str1str,str2str]:[str2str,str1str];
    let union = str1str.length;
    for(let i=0;i<str2str.length;i++){
        const check = str1str.indexOf(str2str[i]);
        if(check === -1){
            union++;
        }else{
            str1str[check] = -1;
        }
        
    }
    const inter = str1str.length+str2str.length-union;
    console.log(inter);
    return Math.floor((inter/union)*65536);
}