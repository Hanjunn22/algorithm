function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let currentChar = s[i];
        let currentIndex = alphabet.indexOf(currentChar);
        let shift = index;

        while (shift > 0) {
            currentIndex = (currentIndex + 1) % 26;
            if (!skip.includes(alphabet[currentIndex])) {
                shift--;
            }
        }

        result += alphabet[currentIndex];
    }

    return result;
}
