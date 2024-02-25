function solution(orders, course) {
    // 주어진 문자열에서 가능한 모든 조합을 생성하는 함수
    function getCombinations(str, length) {
        const combinations = [];
        function recurse(start, combination) {
            if (combination.length === length) {
                combinations.push(combination);
                return;
            }
            for (let i = start; i < str.length; i++) {
                recurse(i + 1, combination + str[i]);
            }
        }
        recurse(0, "");
        return combinations;
    }

    // 모든 주문에 대해 가능한 조합을 생성하고, 각 조합의 등장 횟수를 계산
    const combinationCounts = {};
    orders.forEach(order => {
        const sortedOrder = order.split('').sort().join(''); // 알파벳 순으로 정렬
        course.forEach(length => {
            getCombinations(sortedOrder, length).forEach(combination => {
                combinationCounts[combination] = (combinationCounts[combination] || 0) + 1;
            });
        });
    });

    // 각 코스 길이에 대해 가장 많이 주문된 조합을 찾아 결과 배열에 추가
    const result = [];
    course.forEach(length => {
        const combinations = Object.entries(combinationCounts).filter(([key, value]) => key.length === length && value > 1);
        const maxCount = Math.max(...combinations.map(([_, count]) => count), 0);
        combinations.forEach(([combination, count]) => {
            if (count === maxCount) {
                result.push(combination);
            }
        });
    });

    return result.sort(); // 사전 순으로 정렬하여 반환
}
