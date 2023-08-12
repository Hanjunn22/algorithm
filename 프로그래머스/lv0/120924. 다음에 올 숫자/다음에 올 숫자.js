function solution(common) {
    // common 배열의 길이
    const length = common.length;

    // 등차나 등비를 저장할 변수
    let difference = common[1] - common[0];
    let ratio = common[1] / common[0];

    // 등차수열인지 확인
    let isArithmetic = true;
    for (let i = 1; i < length - 1; i++) {
        if (common[i + 1] - common[i] !== difference) {
            isArithmetic = false;
            break;
        }
    }

    if (isArithmetic) {
        // 등차수열이면 마지막 숫자에 difference를 더해서 반환
        return common[length - 1] + difference;
    } else {
        // 등비수열이면 마지막 숫자에 ratio를 곱해서 반환
        return common[length - 1] * ratio;
    }
}