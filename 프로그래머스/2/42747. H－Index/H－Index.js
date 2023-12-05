function solution(citations) {
    citations.sort((a, b) => b - a);
    let hIndex = 0;

    while (hIndex < citations.length) {
        if (citations[hIndex] <= hIndex) break;
        hIndex++;
    }

    return hIndex;
}