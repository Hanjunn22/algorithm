function solution(num_list) {
    var answer = 0;
    let oddStr = "";
    let evenStr = "";
    for(e of num_list){
        if(e%2===0){
            evenStr+=e.toString();
        } else {
            oddStr+=e.toString();
        }
    } answer = parseInt(evenStr)+parseInt(oddStr);
    return answer;
}