function solution(lines) {
    const logData = lines.map(line => {
        const [date, endTime, processingTime] = line.split(" ");
        const endTimeInMillis = parseTime(endTime);
        const startTimeInMillis = endTimeInMillis - parseFloat(processingTime) * 1000 + 1;
        return [startTimeInMillis, endTimeInMillis];
    });

    let maxThroughput = 0;
    for (const [start, end] of logData) {
        maxThroughput = Math.max(
            maxThroughput,
            calculateThroughput(logData, start, start + 999),
            calculateThroughput(logData, end, end + 999)
        );
    }

    return maxThroughput;
}

// 시간을 밀리초 단위로 변환하는 함수
function parseTime(timeStr) {
    const [hms, ms] = timeStr.split(".");
    const [h, m, s] = hms.split(":").map(Number);
    return h * 3600 * 1000 + m * 60 * 1000 + s * 1000 + parseInt(ms);
}

// 주어진 시간 범위 내의 처리량을 계산하는 함수
function calculateThroughput(logData, start, end) {
    return logData.filter(log => (log[0] >= start && log[0] <= end) || (log[1] >= start && log[1] <= end) || (log[0] <= start && log[1] >= end)).length;
}