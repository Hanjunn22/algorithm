function solution(id_list, report, k) {
    // 신고 결과를 저장할 객체 초기화
    let reportsReceived = {};
    id_list.forEach(id => reportsReceived[id] = []);

    // 중복 제거한 신고 목록 생성
    let uniqueReports = [...new Set(report)];

    // 각 유저별로 신고 당한 횟수 계산
    uniqueReports.forEach(r => {
        let [reporter, reported] = r.split(' ');
        reportsReceived[reported].push(reporter);
    });

    // k번 이상 신고당한 유저 찾기
    let bannedUsers = Object.keys(reportsReceived).filter(user => reportsReceived[user].length >= k);

    // 결과 메일 발송 횟수 계산
    let mailCounts = id_list.map(id => {
        return bannedUsers.reduce((acc, bannedUser) => {
            if (reportsReceived[bannedUser].includes(id)) {
                acc++;
            }
            return acc;
        }, 0);
    });

    return mailCounts;
}
