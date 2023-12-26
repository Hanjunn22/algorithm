function solution(want, number, discount) {
    let result = 0;
    const wantMap = new Map();
    for (let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }

    for (let i = 0; i <= discount.length - 10; i++) {
        let windowMap = new Map(wantMap);
        for (let j = i; j < i + 10; j++) {
            if (windowMap.has(discount[j])) {
                windowMap.set(discount[j], windowMap.get(discount[j]) - 1);
                if (windowMap.get(discount[j]) === 0) {
                    windowMap.delete(discount[j]);
                }
            }
        }
        if (windowMap.size === 0) {
            result++;
        }
    }
    return result;
}
