function solution3(X, Y) {
    var answer = [];
    [X,Y] = X.length > Y.length ? [Y,X] :[X,Y] ; //무조건 Y가 길어야함
    [X,Y] = [X,Y].map(a=>a.split("")); //배열로 바꿈
    for(let i=0;i<Y.length;i++){ //Y를 돌면서 
        const idx = X.indexOf(Y[i]); //Y의 문자열이 X에 있는지 확인하고
        if(idx!==-1){ //있으면
            answer.push(X[idx]); //정답배열에 저장하고
            X[idx] = -1; //중복되지 않게 처리
        }
    }
    // 길이가 없으면 짝꿍이 아님 그리고 다 더한 값이 0000000...으로 많아도 0임. 두가지 해당 안되면 answer에 저장된 값들 정렬해서 문자열로 반환
    return answer.length === 0? "-1" : parseInt(answer.join(""))===0 ? "0" : answer.sort((a,b)=>b-a).join("");
}




function solution1(X, Y) { //시간초과
    var answer = [];
    [X,Y] = X.length > Y.length ? [Y,X] :[X,Y] ; //무조건 Y가 길어야함
    [X,Y] = [X,Y].map(a=>a.split("")); //배열로 바꿈
    for(let i=0;i<Y.length;i++){ //Y를 돌면서 
        const idx = X.indexOf(Y[i]); //Y의 문자열이 X에 있는지 확인하고
        if(idx!==-1){ //있으면
            answer.push(X[idx]); //정답배열에 저장하고
            X[idx] = -1; //중복되지 않게 처리
        }
    }
    // 길이가 없으면 짝꿍이 아님 그리고 다 더한 값이 0000000...으로 많아도 0임. 두가지 해당 안되면 answer에 저장된 값들 정렬해서 문자열로 반환
    return answer.length === 0? "-1" : parseInt(answer.join(""))===0 ? "0" : answer.sort((a,b)=>b-a).join("");
}

function solution(X, Y) {
    let answer = [];
    [X, Y] = X.length > Y.length ? [Y, X] : [X, Y]; // 무조건 Y가 길어야함
    const XMap = new Map();

    for (let i = 0; i < X.length; i++) {
        const char = X[i];
        if (!XMap.has(char)) {
            XMap.set(char, 1);
        } else {
            XMap.set(char, XMap.get(char) + 1);
        }
    }

    for (let i = 0; i < Y.length; i++) {
        const char = Y[i];
        if (XMap.has(char) && XMap.get(char) > 0) {
            answer.push(char);
            XMap.set(char, XMap.get(char) - 1);
        }
    }

    if (answer.length === 0) {
        return "-1";
    } else if (answer.every((char) => char === "0")) {
        return "0";
    } else {
        return answer.sort((a,b)=>b-a).join("")
    }
}