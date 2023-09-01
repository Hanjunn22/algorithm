function solution(my_strings, parts) {
    var answer = '';
    for(let i = 0; i < parts.length; i++) {
        let [a, b] = parts[i];
        answer += my_strings[i].slice(a, b + 1);
    }
    return answer;
}
