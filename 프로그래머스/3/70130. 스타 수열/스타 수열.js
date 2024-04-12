function solution(a) {
    const n = a.length;
    const countMap = new Array(n).fill(0);
    for (const num of a) {
        if (num < n) countMap[num]++;
    }

    let maxStarLength = 0;

    for (let x = 0; x < n; x++) {
        if (countMap[x] <= maxStarLength / 2) continue;  // 빈도수가 현재 최대 길이의 절반보다 작다면 스킵
        let starLength = 0;
        for (let i = 0; i < n - 1; i++) {
            if ((a[i] === x || a[i + 1] === x) && a[i] !== a[i + 1]) {
                starLength += 2;  // 유효한 스타 수열 조각 발견
                i++;  // 다음 페어로 이동
            }
        }
        maxStarLength = Math.max(maxStarLength, starLength);
    }

    return maxStarLength;
}
