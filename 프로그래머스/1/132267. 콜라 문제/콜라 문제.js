function solution(a, b, n) {
    let answer = 0;
    let remain = 0;
    let current = 0;
    
    while(n >= a){
        current = Math.floor(n / a) * b;
        answer += current;
        remain = n % a;
        n = current + remain;
    }

    return answer;
}
