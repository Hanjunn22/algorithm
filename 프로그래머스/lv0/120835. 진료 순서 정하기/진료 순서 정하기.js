function solution(emergency) {
    // 응급도의 크기를 기준으로 정렬하는 함수를 정의합니다.
    function compare(a, b) {
        return b - a; // 내림차순으로 정렬하도록 설정합니다.
    }

    // 정렬된 응급도 배열을 새로운 변수에 저장합니다.
    const sortedEmergency = emergency.slice().sort(compare);

    // 정렬된 응급도 배열의 인덱스를 찾아서 1을 더하여 진료 순서로 매겨진 배열을 만듭니다.
    const result = emergency.map((value) => sortedEmergency.indexOf(value) + 1);

    return result;
}
