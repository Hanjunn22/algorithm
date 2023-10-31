function solution(a, b) {
    // 각 월의 일 수 배열. 윤년이므로 2월은 29일입니다.
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // 요일 이름 배열. 주어진 정보에 따라 금요일부터 시작합니다.
    const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    
    // 주어진 월의 전월까지의 총 일 수를 계산합니다.
    let totalDays = 0;
    for (let i = 0; i < a - 1; i++) {
        totalDays += daysInMonth[i];
    }
    
    // 주어진 일(b)를 더합니다.
    totalDays += b;
    
    // 총 일 수와 시작 요일을 이용하여 주어진 날짜의 요일을 결정합니다.
    return days[(totalDays - 1) % 7];
}
