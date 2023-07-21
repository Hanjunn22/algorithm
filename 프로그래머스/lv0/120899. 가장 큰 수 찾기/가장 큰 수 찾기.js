function solution(array) {
    var answer = [];
    const maxValue = Math.max(...array);
    answer.push(maxValue);
    answer.push(array.indexOf(maxValue));
    return answer;
}
