function solution(binomial) {
    var count = [];
    count = binomial.split(" ");
    
    let [a, op, b] = [parseInt(count[0], 10), count[1], parseInt(count[2], 10)];
    
    let answer;
    if(op === '+'){
        answer = a + b;
    } else if (op === '*'){
        answer = a * b;
    } else {
        answer = a - b;
    }
    
    return answer;
}
