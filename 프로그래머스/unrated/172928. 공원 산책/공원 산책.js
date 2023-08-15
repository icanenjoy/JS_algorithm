function solution(park, routes) {
    var answer = [];
    let stop = 0;
    for(let i=0;i<park.length;i++){ //출발지점 설정
        if(stop===1) break;
        for(let j=0;j<park[i].length;j++){
            if(park[i][j]==="S"){
                answer[0] = i;
                answer[1] = j;
                park[i] = park[i].replace("S","O");
                stop = 1;
                break;
            }
        }
    }
    
    for(let i=0;i<routes.length;i++){
        routes[i] = routes[i].split(" ");
        routes[i][1] = routes[i][1]*1;
        stop = 0;
        if(routes[i][0]==="E"){
            if(answer[1]+routes[i][1]>park[0].length-1) continue;
            else{
                for(let j=answer[1]+1;j<=answer[1]+routes[i][1];j++){
                    if(park[answer[0]][j] !== "O") stop=1;
                }
                if(stop===1) continue;
                else answer[1] = answer[1]+routes[i][1];
            }
        }
        else if(routes[i][0]==="W"){
            if(answer[1]-routes[i][1]<0) continue;
            else{
                for(let j=answer[1]-1;j>=answer[1]-routes[i][1];j--){
                    if(park[answer[0]][j] !== "O") stop=1;
                }
                if(stop===1) continue;
                else answer[1] = answer[1]-routes[i][1];
            }
        }
        else if(routes[i][0]==="S"){
            if(answer[0]+routes[i][1]>park.length-1) continue;
            
            else{
                for(let j=answer[0]+1;j<=answer[0]+routes[i][1];j++){
                    if(park[j][answer[1]]!== "O") stop=1;
                }
                if(stop===1) continue;
                else answer[0] = answer[0]+routes[i][1];
            }
        }
        else if(routes[i][0]==="N"){
            if(answer[0]-routes[i][1]<0) continue;
            else{
                for(let j=answer[0]-1;j>=answer[0]-routes[i][1];j--){
                    if(park[j][answer[1]] !== "O") stop=1;
                }
                if(stop===1) continue;
                else answer[0] = answer[0]-routes[i][1];
            }
        }
        
    }
    return answer;
}