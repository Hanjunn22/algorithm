function solution(s) {
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let found = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (s[j] === char) {
                found = j;
                break;
            }
        }
        if (found === -1) {
            answer.push(-1);
        } else {
            answer.push(i - found);
        }
    }
    return answer;
}