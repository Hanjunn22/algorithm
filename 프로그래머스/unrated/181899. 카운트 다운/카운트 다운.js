function solution(start, end_num) {
    var answer = [];
    while (start >= end_num){
        answer.push(start);
        start = start - 1;
    }
    return answer;
}