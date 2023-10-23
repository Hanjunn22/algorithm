function solution(s, n) {
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';

    for(let char of s) {
        if(char === ' ') {
            answer += ' ';
            continue;
        }

        const letters = (char === char.toUpperCase()) ? upperCaseLetters : lowerCaseLetters;
        const shiftedIndex = (letters.indexOf(char) + n) % 26;

        answer += letters[shiftedIndex];
    }
    
    return answer;
}

