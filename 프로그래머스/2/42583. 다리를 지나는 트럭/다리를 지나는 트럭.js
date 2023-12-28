function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = new Array(bridge_length).fill(0);
    let now_weight = 0; 
    while(1){
        now_weight -= bridge.shift();
        answer++;
        if(truck_weights.length&&(weight>=now_weight+truck_weights[0])){
            bridge.push(truck_weights.shift());
            now_weight += bridge[bridge.length-1]; 
        }else if(truck_weights.length)
            bridge.push(0);
        if(bridge.length===0) return answer;
        
    }
}




function solution1(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = new Array(truck_weights.length*bridge_length).fill(0);
    let last =0;
    for(let i=0;i<truck_weights.length;i++){
        let check = bridge_length;
        while(check>0){
           if(bridge[last]+truck_weights[i]<=weight){
               bridge[last] += truck_weights[i];
               check--;
           }
            last++;
        }
        last = last+1-bridge_length;
    }
    return bridge.filter(item => item !== 0).length+1;
}