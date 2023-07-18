function solution(slice, n) {
    if(n<=slice){
        return 1;
    } else {
        return Math.ceil(n/slice)
    }
}