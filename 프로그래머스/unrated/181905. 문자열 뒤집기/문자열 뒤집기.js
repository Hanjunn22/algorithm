function solution(my_string, s, e) {
    var answer = '';
    answer += my_string.slice(0, s);

    for(let i = e; i >= s; i--){
        answer += my_string[i];
    }

    answer += my_string.slice(e+1);

    return answer;
}
