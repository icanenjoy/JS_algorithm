function solution(arr) {

    let location = 0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[location]>arr[i])
            location = i;
    }
    
    if(arr.length===1) arr[0]=-1;
    else arr.splice(location,1);
    return arr;
}