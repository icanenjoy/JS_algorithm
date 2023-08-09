function solution(new_id) {
    var answer = '';
    let result = new_id.toLowerCase() //1단계 대문자를 소문자로 바꾸기
    .replace(/[^\w\-\.]/g,'') //[]-문자열, ^-반대, \w-대소문자,숫자,_, /g-모든 일치패턴 처리 
    .replace(/\.{2,}/g,'.')// {2,8} 반복설정, 2이상 8미만
    .replace(/^\./,'') // ^\. 문자열시작지점 .을 찾음
    .replace(/\.$/,'') // \.$ 문자열끝지점 .을 찾음

    if(result.length === 0) //빈문자열 a 대입
        result = 'a'

    if(result.length >= 16){ //16이상이면
        result = result.slice(0,15).replace(/\.$/,'')//15개까지 쪼개고 끝에 마침표가 있으면 제거
    }

    if(result.length <= 2){ //2이하면
        result = result.concat(result[result.length-1].repeat(3 - result.length))
        //.concat()문자열 합치기, 마지막 문자를 3이 될 때까지 반복하기
    }

    return result;
}