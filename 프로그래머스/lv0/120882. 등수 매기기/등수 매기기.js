function solution(score) {
    // 각 학생의 평균 점수와 인덱스를 저장하는 배열 생성
    const studentScores = score.map((s, idx) => ({ average: (s[0] + s[1]) / 2, index: idx + 1 }));

    // 평균을 기준으로 학생들을 정렬
    studentScores.sort((a, b) => b.average - a.average);

    // 등수를 매기기 위한 결과 배열 생성
    const result = new Array(score.length).fill(0);

    // 등수를 매기는 과정
    let currentRank = 1;
    for (let i = 0; i < studentScores.length; i++) {
        if (i > 0 && studentScores[i].average !== studentScores[i - 1].average) {
            currentRank = i + 1;
        }
        result[studentScores[i].index - 1] = currentRank;
    }

    return result;
}