function solution(n, t, m, p) {
    let answer = '';
    let numberString = '';

    // 필요한 만큼의 숫자를 n진법으로 변환하여 문자열로 만들기
    for (let i = 0; numberString.length < m * t; i++) {
        numberString += i.toString(n).toUpperCase();
    }

    // 튜브의 순서에 해당하는 숫자만 추출하기
    for (let i = 0; i < t; i++) {
        answer += numberString[i * m + p - 1];
    }

    return answer;
}