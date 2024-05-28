function solution(nums) {
    return Math.min(Math.floor(nums.length/2),[...new Set(nums)].length);
    
}



function solution1(nums) {
    let hash = new Map();
    nums.forEach((i)=>{
        hash.has(i)? hash.set(i,hash.get(i)+1) : hash.set(i,1);
    })
    return Math.min(hash.size, Math.floor(nums.length/2));
}

function first_solution(nums) {
    return Math.min(Math.floor(nums.length/2),[...new Set(nums)].length);
    //절반한거랑, 중복제거한 길이 비교해서 더 작은 값 반환
}