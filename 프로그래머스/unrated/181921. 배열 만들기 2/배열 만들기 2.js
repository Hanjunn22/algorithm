function solution(l, r) {
    let answer = [];
    
    for(let i = l; i <= r; i++) {
        let strNum = i.toString();
        
        if(/^([05]+)$/.test(strNum)) {
            answer.push(i);
        }
    }
    
    return answer.length === 0 ? [-1] : answer;
}
