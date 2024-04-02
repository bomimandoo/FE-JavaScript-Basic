/* 2번 문제 답안을 작성해주세요. */
function solution(n) {
    let fac =1;
    let mul =1;
    while (fac*mul<=n){
        fac = fac*mul;
        mul++;
    }
    return mul-1;
}