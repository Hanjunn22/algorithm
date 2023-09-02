function solution(num_list) {
    function compare(a , b) {
        return a - b;
    }
    var answer = [];
    answer = num_list.sort(compare).slice(0, 5);
    return answer;
}
