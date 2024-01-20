function solution(numbers, hand) {
    // 키패드 위치 설정
    const keyPos = {
        '1': [0, 0], '2': [0, 1], '3': [0, 2],
        '4': [1, 0], '5': [1, 1], '6': [1, 2],
        '7': [2, 0], '8': [2, 1], '9': [2, 2],
        '*': [3, 0], '0': [3, 1], '#': [3, 2]
    };
    
    // 현재 손가락 위치
    let leftPos = keyPos['*'];
    let rightPos = keyPos['#'];
    
    let result = '';

    // 거리 계산 함수
    function getDistance(pos, number) {
        const numPos = keyPos[number];
        return Math.abs(pos[0] - numPos[0]) + Math.abs(pos[1] - numPos[1]);
    }

    numbers.forEach(num => {
        if (num === 1 || num === 4 || num === 7) {
            result += 'L';
            leftPos = keyPos[num];
        } else if (num === 3 || num === 6 || num === 9) {
            result += 'R';
            rightPos = keyPos[num];
        } else {
            const leftDistance = getDistance(leftPos, num);
            const rightDistance = getDistance(rightPos, num);
            
            if (leftDistance < rightDistance || (leftDistance === rightDistance && hand === 'left')) {
                result += 'L';
                leftPos = keyPos[num];
            } else {
                result += 'R';
                rightPos = keyPos[num];
            }
        }
    });

    return result;
}
