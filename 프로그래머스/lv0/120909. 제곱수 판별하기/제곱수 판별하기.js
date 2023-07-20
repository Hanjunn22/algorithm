function solution(n) {
    let sqrt = Math.sqrt(n);
    let intergerSqrt = Math.floor(sqrt);
    if(intergerSqrt*intergerSqrt===n){
        return 1;
    } else {
        return 2;
    }
}