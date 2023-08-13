function solution(num, total) {
    let x = (total - (num-1)*num/2) / num;
    
    let result = [];
    for(let i = 0; i < num; i++) {
        result.push(x + i);
    }
    
    return result;
}
