function solution(topping) {
    let totalCount = new Map();
    let firstCount = new Map();
    let result = 0;

    // 전체 토핑 종류 수 계산
    topping.forEach(t => {
        totalCount.set(t, (totalCount.get(t) || 0) + 1);
    });

    for (let i = 0; i < topping.length - 1; i++) {
        let t = topping[i];
        firstCount.set(t, (firstCount.get(t) || 0) + 1);
        totalCount.set(t, totalCount.get(t) - 1);

        if (totalCount.get(t) === 0) {
            totalCount.delete(t);
        }

        // 두 조각의 토핑 종류 수가 같은 경우
        if (firstCount.size === totalCount.size) {
            result++;
        }
    }

    return result;
}
