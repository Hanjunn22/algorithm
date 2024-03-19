function solution(a) {
    const n = a.length;
    const leftMin = new Array(n).fill(0);
    const rightMin = new Array(n).fill(0);

    // 왼쪽에서 최솟값 계산
    let min = a[0];
    for (let i = 0; i < n; i++) {
        if (a[i] < min) min = a[i];
        leftMin[i] = min;
    }

    // 오른쪽에서 최솟값 계산
    min = a[n - 1];
    for (let i = n - 1; i >= 0; i--) {
        if (a[i] < min) min = a[i];
        rightMin[i] = min;
    }

    // 최후까지 남을 수 있는 풍선의 개수 세기
    let count = 0;
    for (let i = 0; i < n; i++) {
        // 양쪽 끝 풍선은 무조건 남을 수 있음
        if (i === 0 || i === n - 1 || a[i] < leftMin[i - 1] || a[i] < rightMin[i + 1]) {
            count++;
        }
    }

    return count;
}