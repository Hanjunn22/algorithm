function solution(fees, records) {
    const [basicTime, basicFee, unitTime, unitFee] = fees;
    const parkingRecords = {};

    // 1. 입/출차 기록 파싱
    records.forEach(record => {
        const [time, carNumber, action] = record.split(' ');
        const [hour, minute] = time.split(':').map(Number);
        const totalMinutes = hour * 60 + minute;

        if (!parkingRecords[carNumber]) {
            parkingRecords[carNumber] = [];
        }

        parkingRecords[carNumber].push({ time: totalMinutes, action });
    });

    // 2. 시간 계산 및 요금 계산
    const feesByCar = Object.entries(parkingRecords).map(([carNumber, actions]) => {
        let totalTime = 0;
        let lastInTime = null;

        actions.forEach(({ time, action }) => {
            if (action === 'IN') {
                lastInTime = time;
            } else {
                totalTime += time - lastInTime;
                lastInTime = null;
            }
        });

        // 차량이 출차 기록 없이 남아있는 경우 처리
        if (lastInTime !== null) {
            totalTime += (23 * 60 + 59) - lastInTime;
        }

        // 3. 요금 계산
        let totalFee = basicFee;
        if (totalTime > basicTime) {
            totalFee += Math.ceil((totalTime - basicTime) / unitTime) * unitFee;
        }

        return { carNumber, fee: totalFee };
    });

    // 4. 결과 정렬 및 반환
    return feesByCar.sort((a, b) => a.carNumber - b.carNumber).map(({ fee }) => fee);
}
