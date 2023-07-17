function solution(sides) {
    sides.sort((a, b) => a - b); // 변의 길이를 오름차순으로 정렬
    
    const longestSide = sides[2];
    const sumOfOtherSides = sides[0] + sides[1];
    
    if (longestSide < sumOfOtherSides) {
        return 1; // 삼각형을 만들 수 있음
    } else {
        return 2; // 삼각형을 만들 수 없음
    }
}
