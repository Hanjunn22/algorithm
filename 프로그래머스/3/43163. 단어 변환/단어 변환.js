function solution(begin, target, words) {
    if (!words.includes(target)) return 0; // target이 words에 없는 경우

    let queue = [[begin, 0]]; // [현재 단어, 단계 수]
    let visited = new Set([begin]); // 방문한 단어 저장

    while (queue.length) {
        let [currentWord, steps] = queue.shift(); // 큐에서 하나의 원소를 꺼냄

        if (currentWord === target) return steps; // 목표 단어에 도달한 경우

        for (let word of words) {
            let diff = 0; // 현재 단어와 비교 단어 간의 차이를 저장하는 변수
            for (let i = 0; i < word.length; i++) {
                if (word[i] !== currentWord[i]) diff++;
                if (diff > 1) break; // 차이가 2개 이상이면 다음 단어로 넘어감
            }
            if (diff === 1 && !visited.has(word)) { // 한 글자만 다르고 방문하지 않은 단어라면
                queue.push([word, steps + 1]); // 큐에 추가
                visited.add(word); // 방문한 단어로 추가
            }
        }
    }

    return 0; // 변환할 수 없는 경우
}
