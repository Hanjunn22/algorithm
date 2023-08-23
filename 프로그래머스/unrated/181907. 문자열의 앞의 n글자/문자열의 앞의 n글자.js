function solution(my_string, n) {
    var answer = '';
    let arr = my_string.split("");
    let arrAnswer = arr.slice(0, n);
    answer = arrAnswer.join("");
    return answer;
}