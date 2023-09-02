function solution(n) {
    var answer = 0;
    if(n%2 !== 0){
        for(let i = 1; i<=n; i+=2){
            answer += i;
        }
    } else {
        for(let j = 2; j<=n; j+= 2){
            answer += j*j;
        }
    }
    return answer;
}