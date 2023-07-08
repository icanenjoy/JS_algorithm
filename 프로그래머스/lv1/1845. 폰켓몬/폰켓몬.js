function solution(nums) {
    return Math.min(Math.floor(nums.length/2),[...new Set(nums)].length);
    //절반한거랑, 중복제거한 길이 비교해서 더 작은 값 반환
}