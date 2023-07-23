function solution(num, k) {
    const numString = num.toString(); // 정수 num을 문자열로 변환
    for (let i = 0; i < numString.length; i++) {
        if (parseInt(numString[i]) === k) {
            return i+1; // k를 발견하면 해당 인덱스를 반환하고 함수 종료
        }
    }
    return -1; // 반복문을 모두 돌았는데도 k를 발견하지 못한 경우 -1을 반환
}