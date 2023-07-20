function solution(my_string, letter) {
    var answer = '';
    for(i=0; i<my_string.length; i++){
        if(letter!==my_string[i]) {
        answer += my_string[i];
        }
    }
    return answer;

}