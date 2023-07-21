function solution(my_string) {
    var answer = '';
    for (var i = 0; i < my_string.length; i++) {
        var currentChar = my_string[i];

        if (currentChar === currentChar.toUpperCase()) {
            answer += currentChar.toLowerCase();
        } else if (currentChar === currentChar.toLowerCase()) {
            answer += currentChar.toUpperCase();
        }
    }
    return answer;
}
