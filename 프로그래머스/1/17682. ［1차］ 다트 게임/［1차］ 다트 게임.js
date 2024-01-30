function solution(dartResult) {
    const scores = [];
    let currentScore = '';

    for (let i = 0; i < dartResult.length; i++) {
        const char = dartResult[i];
        if (!isNaN(char)) { // 숫자인 경우
            currentScore = currentScore === '1' && char === '0' ? 10 : char;
        } else {
            switch (char) {
                case 'S':
                    scores.push(Number(currentScore));
                    break;
                case 'D':
                    scores.push(Math.pow(Number(currentScore), 2));
                    break;
                case 'T':
                    scores.push(Math.pow(Number(currentScore), 3));
                    break;
                case '*':
                    scores[scores.length - 1] *= 2;
                    if (scores.length > 1) {
                        scores[scores.length - 2] *= 2;
                    }
                    break;
                case '#':
                    scores[scores.length - 1] *= -1;
                    break;
            }
            currentScore = '';
        }
    }
    return scores.reduce((a, b) => a + b, 0);
}