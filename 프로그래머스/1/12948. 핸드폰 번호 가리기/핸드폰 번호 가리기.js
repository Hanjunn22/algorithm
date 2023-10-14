function solution(phone_number) {
    var answer = '';
    let front = phone_number.length - 4;
    let back = phone_number.slice(-4);

    for(let i = 0; i < front; i++){
        answer += "*";
    }
    answer += back;
    return answer;
}
