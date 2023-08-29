function solution(myString) {
    var answer = '';
    answer = myString.toLowerCase();
    answer = answer.replaceAll("a", "A");
    return answer;
}