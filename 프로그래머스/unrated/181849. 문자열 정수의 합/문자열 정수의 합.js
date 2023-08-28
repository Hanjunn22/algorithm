function solution(num_str) {
    var answer = 0;
    answer = num_str.split("");
    answer = parseInt(answer.reduce((acc, val) => acc + parseInt(val), 0));
    return answer;
}