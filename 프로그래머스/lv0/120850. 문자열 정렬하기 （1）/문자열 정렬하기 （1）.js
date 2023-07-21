function solution(my_string) {
    var answer = [];
    for (var i = 0; i < my_string.length; i++) {
        // 문자열의 각 문자가 숫자인지 확인하여 숫자라면 배열에 추가
        if (!Number.isNaN(parseInt(my_string[i]))) {
            answer.push(parseInt(my_string[i]));
        }
    }
    return answer.sort((a, b) => a - b);
}
