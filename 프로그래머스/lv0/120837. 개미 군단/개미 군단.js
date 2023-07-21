function solution(hp) {
    const a = 5;
    const b = 3;
    const c = 1;
    const d = Math.floor(hp / a);
    
    let answer = d + Math.floor((hp % a) / b) + Math.floor((hp % a % b) / c);
    return answer;
}
