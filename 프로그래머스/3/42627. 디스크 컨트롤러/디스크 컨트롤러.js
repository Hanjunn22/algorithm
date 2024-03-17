function solution(jobs) {
    let total = 0; // 총 대기시간 + 처리시간의 합
    let currentTime = 0; // 현재 시간
    let jobsCount = jobs.length; // 전체 작업의 수

    // 요청 시간 순으로 작업을 정렬합니다.
    jobs.sort((a, b) => a[0] - b[0]);

    const priorityQueue = []; // 처리할 작업을 관리할 우선순위 큐

    while (jobs.length > 0 || priorityQueue.length > 0) {
        // 현재 시간 내에 시작할 수 있는 모든 작업을 우선순위 큐에 넣습니다.
        while (jobs.length > 0 && jobs[0][0] <= currentTime) {
            priorityQueue.push(jobs.shift());
            priorityQueue.sort((a, b) => a[1] - b[1]); // 처리 시간이 짧은 작업 순으로 정렬
        }

        if (priorityQueue.length > 0) {
            // 우선순위 큐에서 작업을 하나 꺼내 처리합니다.
            const [start, duration] = priorityQueue.shift();
            currentTime = Math.max(currentTime, start) + duration; // 현재 시간 업데이트
            total += currentTime - start; // 총 대기시간 + 처리시간 합산
        } else {
            // 처리할 수 있는 작업이 없다면, 현재 시간을 다음 작업의 시작 시간으로 설정
            currentTime = jobs[0][0];
        }
    }

    return Math.floor(total / jobsCount); // 평균 대기시간 반환
}
