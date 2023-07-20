function solution(my_string) {
    var answer = '';
    for(i=my_string.length-1; 0<=i; i--){
        answer = answer + my_string[i]
    }
    return answer;
}