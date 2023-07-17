function solution(array, n) {
    let answer = 0;
    for(i=0; i<array.length; i++){
        if(n === array[i]){
        answer = answer + 1}
    }
    return answer;
}