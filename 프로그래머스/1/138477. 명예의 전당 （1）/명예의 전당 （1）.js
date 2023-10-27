function solution(k, score) {
    let answer = [];
    let week = [];

    for (let i = 0; i < score.length; i++) {
        week.push(score[i]);
        week.sort((a, b) => b - a);

        if (week.length < k) {
            answer.push(week[week.length - 1]);
        } else {
            answer.push(week[k - 1]);
        }
    }
    return answer;
}
