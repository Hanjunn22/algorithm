function solution(N, stages) {
    let failures = [];

    for (let i = 1; i <= N; i++) {
        let reached = stages.filter(stage => stage >= i).length;
        let notCleared = stages.filter(stage => stage === i).length;
        let failureRate = (reached === 0) ? 0 : notCleared / reached;
        failures.push({ stage: i, rate: failureRate });
    }

    failures.sort((a, b) => b.rate - a.rate || a.stage - b.stage);

    return failures.map(failure => failure.stage);
}