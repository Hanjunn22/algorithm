function solution(arr1, arr2) {
    // 먼저 배열의 길이를 비교합니다.
    if (arr1.length > arr2.length) return 1;
    if (arr1.length < arr2.length) return -1;

    // 배열의 길이가 같은 경우 각 배열의 원소의 합을 비교합니다.
    let sum1 = arr1.reduce((acc, val) => acc + val, 0);
    let sum2 = arr2.reduce((acc, val) => acc + val, 0);
    

    if (sum1 > sum2) return 1;
    if (sum1 < sum2) return -1;
    return 0;  // 길이도 같고, 합도 같은 경우
}
