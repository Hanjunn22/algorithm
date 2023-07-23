function solution(my_string) {
    var answer = '';
    let myLower = my_string.toLowerCase().split('');
    answer = myLower.sort().join('');
    return answer;
}