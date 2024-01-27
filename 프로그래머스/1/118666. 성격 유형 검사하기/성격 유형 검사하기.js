function solution(survey, choices) {
    const scoreMap = {
        R: 0, T: 0,
        C: 0, F: 0,
        J: 0, M: 0,
        A: 0, N: 0
    };

    survey.forEach((type, index) => {
        const choice = choices[index];
        let score = 0;

        // 매우 비동의(1)에서 매우 동의(7)까지 점수 계산
        if (choice < 4) score = 4 - choice; // 비동의 관련 선택지
        else if (choice > 4) score = choice - 4; // 동의 관련 선택지

        const selectedType = choice <= 4 ? type[0] : type[1];
        scoreMap[selectedType] += score;
    });

    // 최종 성격 유형 결정
    let result = '';
    result += scoreMap.R >= scoreMap.T ? 'R' : 'T';
    result += scoreMap.C >= scoreMap.F ? 'C' : 'F';
    result += scoreMap.J >= scoreMap.M ? 'J' : 'M';
    result += scoreMap.A >= scoreMap.N ? 'A' : 'N';

    return result;
}