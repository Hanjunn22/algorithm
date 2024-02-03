function solution(today, terms, privacies) {
    // 오늘 날짜 파싱
    const todayDate = parseDate(today);
    // 약관별 유효기간 매핑
    const termMap = terms.reduce((acc, term) => {
        const [type, duration] = term.split(' ');
        acc[type] = parseInt(duration);
        return acc;
    }, {});

    // 파기해야 할 개인정보 번호 저장 배열
    const expiredPrivacies = [];

    // 개인정보 순회
    privacies.forEach((privacy, index) => {
        const [collectedDate, termType] = privacy.split(' ');
        const expiryDate = calculateExpiryDate(parseDate(collectedDate), termMap[termType]);
        if (isExpired(expiryDate, todayDate)) {
            expiredPrivacies.push(index + 1);
        }
    });

    return expiredPrivacies;
}

// 날짜 파싱 함수
function parseDate(dateStr) {
    const [year, month, day] = dateStr.split('.').map(Number);
    return new Date(year, month - 1, day);
}

// 유효기간 계산 함수
function calculateExpiryDate(date, months) {
    date.setMonth(date.getMonth() + months);
    date.setDate(date.getDate() - 1); // 유효기간 마지막 날짜는 수집일로부터 유효기간 달의 전날까지임
    return date;
}

// 유효기간 만료 여부 판단 함수
function isExpired(expiryDate, todayDate) {
    return expiryDate < todayDate;
}