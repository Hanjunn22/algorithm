function solution(word) {
    const alphabet = { 'A': 0, 'E': 1, 'I': 2, 'O': 3, 'U': 4 };
    let result = 0;
    let weight = 781; // 5^4 + 5^3 + 5^2 + 5^1 + 5^0 (길이가 5일 때의 가중치)

    for (let i = 0; i < word.length; i++) {
        result += alphabet[word[i]] * weight;
        weight = (weight - 1) / 5; // 다음 글자의 가중치 계산
    }

    return result + word.length; // 길이에 따른 추가 값
}