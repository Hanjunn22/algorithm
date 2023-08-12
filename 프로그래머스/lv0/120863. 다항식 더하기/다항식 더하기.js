function solution(polynomial) {
    const terms = polynomial.split(' + '); // 항목별로 분리

    let coefficient = 0; // x의 계수
    let constant = 0;    // 상수

    for (let term of terms) {
        if (term.includes('x')) {
            // 계수가 없으면 1로 처리
            let num = term.replace('x', '') || '1';
            coefficient += parseInt(num);
        } else {
            constant += parseInt(term);
        }
    }

    // 결과 문자열 생성
    let result = '';
    if (coefficient > 1) result += coefficient + 'x';
    else if (coefficient === 1) result += 'x';

    if (constant !== 0) {
        if (result) result += ' + ' + constant;
        else result = String(constant);
    }

    return result;
}
