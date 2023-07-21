function solution(numbers) {
    // 배열을 오름차순으로 정렬
    numbers.sort((a, b) => a - b);

    // 가장 큰 두 개의 원소와 가장 작은 두 개의 원소 선택
    const maxProduct = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    const minProduct = numbers[0] * numbers[1];

    // 두 값을 비교하여 최댓값 리턴
    return Math.max(maxProduct, minProduct);
}
