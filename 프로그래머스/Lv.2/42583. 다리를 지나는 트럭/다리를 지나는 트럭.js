function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = [];
    let bridgeWeight = 0;

    // 다리 길이만큼 0으로 초기화된 배열 생성
    bridge = Array(bridge_length).fill(0);

    while (bridge.length) {
        // 매 시간마다 다리에서 트럭 하나를 뺌
        bridgeWeight -= bridge.shift();
        time++;

        if (truck_weights.length) {
            // 다리에 새 트럭이 올라갈 수 있다면
            if (bridgeWeight + truck_weights[0] <= weight) {
                // 다리에 트럭을 올리고 대기열에서 트럭을 뺌
                bridgeWeight += truck_weights[0];
                bridge.push(truck_weights.shift());
            } else {
                // 새 트럭이 올라갈 수 없다면 0을 추가하여 다리 길이 유지
                bridge.push(0);
            }
        }
    }

    return time;
}
