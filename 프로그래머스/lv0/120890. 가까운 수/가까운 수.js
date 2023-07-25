function solution(array, n) {
    let closestNumber = array[0]; // 가장 가까운 수를 저장할 변수를 배열의 첫 번째 요소로 초기화
    let minDiff = Math.abs(array[0] - n); // 가장 작은 차이를 저장할 변수를 초기화

    for (let i = 1; i < array.length; i++) {
        const diff = Math.abs(array[i] - n); // 현재 수와 n과의 차이를 계산
        if (diff < minDiff) {
            minDiff = diff; // 더 작은 차이를 발견하면 minDiff를 갱신하고
            closestNumber = array[i]; // 가장 가까운 수를 closestNumber로 갱신
        } else if (diff === minDiff) {
            // 차이가 같은 경우 더 작은 수를 선택
            closestNumber = Math.min(closestNumber, array[i]);
        }
    }

    return closestNumber;
}