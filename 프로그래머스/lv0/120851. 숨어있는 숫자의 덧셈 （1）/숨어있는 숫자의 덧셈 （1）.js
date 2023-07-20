function solution(my_string) {
    let num = my_string.split("");
    var answer = 0;
    for(i=0; i<my_string.length; i++){
        if(Number(num[i])){
            answer += Number(num[i]);
        }
    }
    return answer;
}