function solution(s) {
    let maxLength = 0; // 가장 긴 팰린드롬의 길이를 저장할 변수

    function expandAroundCenter(left, right) {
        // 중앙에서 확장해 나가면서 팰린드롬을 찾는 함수
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // 범위를 벗어나지 않고, 양쪽 끝 문자가 같은 동안 반복
            const currentLength = right - left + 1;
            maxLength = Math.max(maxLength, currentLength);
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // 모든 문자를 중심으로 홀수 길이 팰린드롬 탐색
        expandAroundCenter(i, i);
        // 모든 문자 사이를 중심으로 짝수 길이 팰린드롬 탐색
        expandAroundCenter(i, i + 1);
    }

    return maxLength;
}
