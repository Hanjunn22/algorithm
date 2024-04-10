function solution(operations) {
    const queue = []; // 이중 우선순위 큐를 나타내는 배열

    operations.forEach(op => {
        const [command, valueStr] = op.split(' '); // 명령어와 값 분리
        const value = parseInt(valueStr);

        if (command === 'I') {
            queue.push(value); // 숫자 삽입
        } else if (command === 'D') {
            if (queue.length === 0) return; // 큐가 비어있으면 무시

            if (value === 1) {
                // 최댓값 삭제
                const maxIndex = queue.indexOf(Math.max(...queue));
                queue.splice(maxIndex, 1);
            } else if (value === -1) {
                // 최솟값 삭제
                const minIndex = queue.indexOf(Math.min(...queue));
                queue.splice(minIndex, 1);
            }
        }
    });

    if (queue.length === 0) {
        return [0, 0]; // 큐가 비어있으면 [0, 0] 반환
    } else {
        return [Math.max(...queue), Math.min(...queue)]; // 큐의 최댓값과 최솟값 반환
    }
}
