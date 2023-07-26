function solution(s) {
    const charCounts = {}; // 문자별 등장 횟수를 저장할 객체

    // 각 문자의 등장 횟수를 세기
    for (let char of s) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    const uniqueChars = [];

    // 등장 횟수가 1인 문자들을 uniqueChars 배열에 추가
    for (let char in charCounts) {
        if (charCounts[char] === 1) {
            uniqueChars.push(char);
        }
    }

    // uniqueChars 배열을 사전 순으로 정렬
    uniqueChars.sort();

    // 배열을 문자열로 변환하여 반환
    return uniqueChars.join('');
}