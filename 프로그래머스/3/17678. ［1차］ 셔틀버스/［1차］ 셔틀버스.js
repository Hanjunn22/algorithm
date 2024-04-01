function solution(n, t, m, timetable) {
    // 크루 도착 시간을 분으로 변환
    const crewTimes = timetable.map(time => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    }).sort((a, b) => a - b); // 오름차순 정렬

    // 셔틀 운행 시간표 생성
    let shuttleTime = 540; // 09:00을 분으로 변환
    let lastTime;

    for (let i = 0; i < n; i++) {
        let count = 0; // 이번 셔틀에 타는 크루 수
        while (count < m && crewTimes[0] <= shuttleTime) {
            lastTime = crewTimes.shift() - 1;
            count++;
        }

        if (i == n - 1) { // 마지막 셔틀인 경우
            if (count < m) lastTime = shuttleTime; // 셔틀에 자리가 남아있다면, 셔틀 도착 시간에 맞춰 도착
        }

        shuttleTime += t;
    }

    // HH:MM 형식으로 변환하여 반환
    return String(Math.floor(lastTime / 60)).padStart(2, '0') + ':' +
           String(lastTime % 60).padStart(2, '0');
}