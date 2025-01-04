function solution1(scoville, K) {
    const hash = {};
    let ans = 0;
    
    for(let i =0; i<scoville.length;i++){
        hash[scoville[i]] = hash[scoville[i]]? hash[scoville[i]]+1:1
    }

    while(1){
        const keys = Object.keys(hash)
        let mixedFood = keys[0]*1;
        
        if(mixedFood>=K) return ans;
        if(keys.length===1&&hash[keys[0]]===1) return -1;
        
        if(hash[keys[0]]>1){
            mixedFood += keys[0]*2
            hash[keys[0]]-2===0? delete hash[keys[0]]: hash[keys[0]]-2;
        }
        else{
            mixedFood += keys[1]*2
            delete hash[keys[0]]
            hash[keys[1]]-1===0? delete hash[keys[1]]: hash[keys[1]]-1;
        }
        ans++;
        hash[mixedFood] = hash[mixedFood]? hash[mixedFood]+1:1;
    }
}



class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestIndex = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;
            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }

    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    
    scoville.forEach(score => minHeap.insert(score));

    let answer = 0;

    while (minHeap.size() > 1) {
        const first = minHeap.extractMin(); // 가장 낮은 점수
        if (first >= K) return answer; 
        
        const second = minHeap.extractMin(); // 두 번째로 낮은 점수
        const mixed = first + (second * 2); // 혼합하여 새로운 점수 생성
        
        minHeap.insert(mixed); // 혼합된 점수를 다시 힙에 추가
        answer++;
    }

    return minHeap.size() === 1 && minHeap.extractMin() < K ? -1 : answer;
}