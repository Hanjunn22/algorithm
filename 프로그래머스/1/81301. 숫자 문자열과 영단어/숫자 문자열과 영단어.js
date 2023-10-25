function solution(s) {
    // 숫자와 영단어 매칭 객체
    const wordToNum = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };

    // 객체의 key(영단어)를 순회하면서 해당 영단어가 문자열 s에 있다면 숫자로 치환
    for (let word in wordToNum) {
        const regex = new RegExp(word, 'g');  // 글로벌 매치를 위한 정규표현식
        s = s.replace(regex, wordToNum[word]);
    }

    return parseInt(s, 10);  // 문자열을 10진수로 변환
}