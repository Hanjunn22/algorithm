function solution(n, words) {
    let usedWords = new Set();
    usedWords.add(words[0]);

    for (let i = 1; i < words.length; i++) {
        if (words[i-1][words[i-1].length - 1] !== words[i][0] || usedWords.has(words[i])) {
            return [(i % n) + 1, Math.ceil((i + 1) / n)];
        }
        usedWords.add(words[i]);
    }

    return [0, 0];
}
