function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];
    const scores = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        patterns.forEach((pattern, index) => {
            if (pattern[i % pattern.length] === answers[i]) {
                scores[index]++;
            }
        });
    }

    const maxScore = Math.max(...scores);
    const result = [];

    scores.forEach((score, index) => {
        if (score === maxScore) {
            result.push(index + 1);
        }
    });

    return result;
}
