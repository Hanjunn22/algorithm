function solution(num_list) {
    var answer = num_list;
    let last = num_list.length-1;
    let lastButOne = num_list.length-2;
    if(num_list[last]>num_list[lastButOne]){
        answer.push(num_list[last]-num_list[lastButOne]);
    } else {
        answer.push(num_list[last]*2);
    }
    return answer;
}