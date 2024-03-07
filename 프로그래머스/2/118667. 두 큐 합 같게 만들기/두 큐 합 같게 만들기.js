function solution(queue1, queue2) {
    const totalSum = queue1.reduce((acc, cur) => acc + cur, 0) + queue2.reduce((acc, cur) => acc + cur, 0);
    if (totalSum % 2 !== 0) return -1; // 전체 합이 홀수이면, 같게 만들 수 없음
    
    const targetSum = totalSum / 2;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = totalSum - sum1;
    let idx1 = 0, idx2 = 0;
    const limit = queue1.length * 3; // 무한 루프 방지를 위한 제한 설정

    for (let count = 0; count < limit; count++) {
        if (sum1 === targetSum) return count;

        if (sum1 > targetSum) {
            sum1 -= queue1[idx1];
            queue2.push(queue1[idx1++]);
        } else {
            sum1 += queue2[idx2];
            queue1.push(queue2[idx2++]);
        }
    }

    return -1; // 조건을 만족하는 경우를 찾지 못함
}
