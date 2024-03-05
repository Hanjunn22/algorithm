function solution(msg) {
    // 사전 초기화
    const dictionary = {};
    for (let i = 0; i < 26; i++) {
        const char = String.fromCharCode(65 + i);
        dictionary[char] = i + 1;
    }

    const output = [];
    for (let i = 0; i < msg.length;) {
        let w = msg[i];
        let j = i + 1;

        // 사전에서 현재 입력과 일치하는 가장 긴 문자열 w 찾기
        while (j <= msg.length && dictionary[w + msg[j]] !== undefined) {
            w += msg[j];
            j++;
        }

        // w에 해당하는 사전의 색인 번호 출력
        output.push(dictionary[w]);

        // 사전에 w+c 등록
        if (j <= msg.length) {
            dictionary[w + msg[j]] = Object.keys(dictionary).length + 1;
        }

        i += w.length; // 입력에서 w 제거
    }

    return output;
}

