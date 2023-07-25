function solution(i, j, k) {
    var answer = 0;
    for (let a = i; a <= j; a++) {
        const numString = String(a); // 숫자 a를 문자열로 변환
        for (let char of numString) {
            if (Number(char) === k) {
                answer++;
            }
        }
    }
    return answer;
}