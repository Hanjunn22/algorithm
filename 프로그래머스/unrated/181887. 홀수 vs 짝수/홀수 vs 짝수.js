function solution(num_list) {
    var answer = 0;
    let odd = 0;
    let even = 0;
    for(let i = 0; i<num_list.length; i+=2){
        odd += num_list[i];
    }
    for(let j = 1; j<num_list.length; j+=2){
        even += num_list[j];
    }
    answer = Math.max(odd, even);
    return answer;
}