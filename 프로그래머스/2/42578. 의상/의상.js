function solution(clothes) {
    let clothesMap = new Map();

    // 의상 종류별로 분류하고 카운트
    clothes.forEach(([name, type]) => {
        if (!clothesMap.has(type)) {
            clothesMap.set(type, 1);
        } else {
            clothesMap.set(type, clothesMap.get(type) + 1);
        }
    });

    // 각 종류별로 의상을 입거나 입지 않는 경우의 수를 곱함
    let combinations = 1;
    clothesMap.forEach(count => {
        combinations *= (count + 1);
    });

    // 아무것도 입지 않는 경우 하나를 빼줌
    return combinations - 1;
}