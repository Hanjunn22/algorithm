function solution(num_list) {
    var answer = 0;
    if(num_list.length>=11){
        answer = num_list.reduce((arr, sum) => arr + sum, 0);
    } else {
        answer = num_list.reduce((arr, mul) => arr * mul, 1);
    }
    return answer;
}