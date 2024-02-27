function solution(p) {
    if (p === '') return p; // 1단계: 입력이 빈 문자열인 경우, 빈 문자열 반환

    // 2단계: 문자열을 u, v로 분리
    let balance = 0;
    let pos = 0;
    do {
        balance += p[pos++] === '(' ? 1 : -1;
    } while (balance !== 0);
    
    const u = p.slice(0, pos);
    const v = p.slice(pos);

    // 3단계: 문자열 u가 "올바른 괄호 문자열"인지 확인
    if (isCorrect(u)) {
        // 3-1단계: u가 올바른 괄호 문자열이라면, v에 대해 1단계부터 다시 수행
        return u + solution(v);
    }

    // 4단계: u가 "올바른 괄호 문자열"이 아니라면 아래 과정 수행
    let answer = '(' + solution(v) + ')'; // 4-1, 4-2, 4-3단계
    for (let i = 1; i < u.length - 1; i++) { // 4-4단계: u의 첫 번째와 마지막 문자를 제거하고 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙임
        answer += u[i] === '(' ? ')' : '(';
    }
    return answer; // 4-5단계: 생성된 문자열 반환
}

// "올바른 괄호 문자열"인지 확인하는 함수
function isCorrect(s) {
    let balance = 0;
    for (let i = 0; i < s.length; i++) {
        balance += s[i] === '(' ? 1 : -1;
        if (balance < 0) return false; // ')' 괄호가 더 많아지는 순간 올바른 괄호 문자열이 아님
    }
    return balance === 0;
}
