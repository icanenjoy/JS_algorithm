function solution(s){
    let check =0;
    for(let i=0;i<s.length;i++){
        if(s[i]==="(") check++; //열리면 1더해줌
        else if(s[i]===")") check--; //닫히면 1빼줌
        if(check<0) return false; //음수로 가면 )가 먼저나와서 짝이 안 맞으니까 false
    }

    return check===0? true:false; //0이면 짝이 맞고 0이상이면 (가 남아서 false
}