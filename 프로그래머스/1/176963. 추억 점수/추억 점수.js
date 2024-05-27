function solution(name, yearning, photo) {
    const ans = new Array(photo.length).fill(0);
    for(let i=0;i<name.length;i++){
        const [friend_name,score] = [name[i],yearning[i]];
        for(let j=0;j<photo.length;j++){
            if(photo[j].includes(friend_name)) ans[j]+=score;
        }
    }
    return ans;
}


function solution1(name, yearning, photo) {
    let answer = [];
    for(let i=0;i<photo.length;i++){ //photo의 사진개수
        answer[i] = 0; 
        for(let j=0;j<photo[i].length;j++){ //사진에 있는 사람의 그리움값
            if(name.indexOf(photo[i][j])!==-1) //그리움이 없지 않다면
                answer[i] += yearning[name.indexOf(photo[i][j])] //그사람 이름의 인덱스를 구해서 yearning 배열에 인덱스를 넣어서 구한 그리움 점수를 더해준다.
        }
    }
    return answer;
}