function solution(cacheSize, cities) {
    let executionTime = 0;
    let cache = [];

    for (let city of cities) {
        city = city.toLowerCase(); // 대소문자 구분 없애기

        let index = cache.indexOf(city);

        if (index > -1) { // 캐시 히트
            cache.splice(index, 1); // 기존 위치에서 제거
            executionTime += 1;
        } else { // 캐시 미스
            if (cacheSize > 0 && cache.length >= cacheSize) {
                cache.shift(); // 캐시가 꽉 찼으면 가장 오래된 항목 제거
            }
            executionTime += 5;
        }

        if (cacheSize > 0) {
            cache.push(city); // 캐시에 현재 도시 추가
        }
    }

    return executionTime;
}