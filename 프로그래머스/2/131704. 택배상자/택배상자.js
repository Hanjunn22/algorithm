function solution(order) {
    let containerPosition = 1; // 메인 컨테이너 벨트의 현재 위치
    const auxiliaryBelt = []; // 보조 컨테이너 벨트 (스택으로 사용)
    let loadedBoxes = 0; // 트럭에 실린 상자의 수

    for (let i = 0; i < order.length; i++) {
        while (containerPosition <= order[i]) {
            auxiliaryBelt.push(containerPosition++);
        }

        // 보조 컨테이너 벨트의 상단이 현재 실어야 하는 상자 순서와 일치하면 트럭에 싣고, 아니면 중단
        if (auxiliaryBelt[auxiliaryBelt.length - 1] === order[i]) {
            auxiliaryBelt.pop(); // 트럭에 싣기
            loadedBoxes++;
        } else {
            break; // 실을 수 없는 상황이므로 종료
        }
    }

    return loadedBoxes;
}

