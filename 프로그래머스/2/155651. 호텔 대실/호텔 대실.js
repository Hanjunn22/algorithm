function convertToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}

function solution(book_time) {
    // 예약 시간을 시작 시간 기준으로 정렬
    book_time.sort((a, b) => convertToMinutes(a[0]) - convertToMinutes(b[0]));

    let rooms = [];
    for (let i = 0; i < book_time.length; i++) {
        let startTime = convertToMinutes(book_time[i][0]);
        let endTime = convertToMinutes(book_time[i][1]) + 10; // 청소 시간 추가

        let roomFound = false;
        for (let j = 0; j < rooms.length; j++) {
            // 현재 예약 시작 시간이 기존 예약 종료 시간 이후인 경우
            if (startTime >= rooms[j]) {
                rooms[j] = endTime; // 기존 방 재사용
                roomFound = true;
                break;
            }
        }

        if (!roomFound) {
            rooms.push(endTime); // 새 방 추가
        }
    }

    return rooms.length; // 필요한 방의 최소 수 반환
}
