function solution(n, m) {
    let answer = [gcd(n,m), lcm(n,m)]
    
    return answer;
}
        
        
// 최대 공약수를 구하는 함수
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

// 최소 공배수를 구하는 함수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

