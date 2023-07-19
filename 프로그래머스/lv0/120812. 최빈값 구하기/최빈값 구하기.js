function solution(array) {
    const freqMap = new Map();
    
    // 배열의 각 원소의 빈도수를 카운트
    for (let i = 0; i < array.length; i++){
        if (freqMap.has(array[i])) {
freqMap.set(array[i], freqMap.get(array[i]) + 1);
        } else {
            freqMap.set(array[i], 1);
        }
    }
    
    let maxFreq = 0;
    let mode = -1;
    
    // 최빈값 탐색
    for (const [key, value] of freqMap) {
        if (value > maxFreq) {
            maxFreq = value;
            mode = key;
        } else if (value === maxFreq) {
            mode = -1; // 최빈값이 여러 개이면 -1
        }
    }
    
    return mode;
}