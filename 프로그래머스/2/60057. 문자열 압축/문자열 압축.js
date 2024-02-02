function solution(s) {
    let minLength = s.length; // 초기 최소 길이는 원본 문자열의 길이로 설정

    for (let step = 1; step <= Math.floor(s.length / 2); step++) {
        let compressed = ""; // 압축된 문자열을 저장할 변수
        let prev = s.substr(0, step); // 이전 문자열 조각
        let count = 1; // 반복 횟수

        for (let j = step; j <= s.length; j += step) {
            // 다음 문자열 조각과 이전 문자열 조각을 비교
            let next = s.substr(j, step);
            if (prev === next) {
                count++; // 반복 횟수 증가
            } else {
                compressed += (count > 1 ? count : '') + prev; // 압축 문자열에 추가
                prev = next; // 이전 문자열 조각 업데이트
                count = 1; // 반복 횟수 초기화
            }
        }
        compressed += prev; // 마지막 문자열 조각 추가
        minLength = Math.min(minLength, compressed.length); // 최소 길이 업데이트
    }

    return minLength;
}