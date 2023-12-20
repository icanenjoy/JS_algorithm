function solution(bridge_length, weight, truck_weights) {
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