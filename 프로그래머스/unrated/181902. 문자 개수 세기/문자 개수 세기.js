function solution(my_string) {
    let counts = Array(52).fill(0);

    for(let char of my_string) {
        if(char >= 'A' && char <= 'Z') {
            counts[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        }
        else if(char >= 'a' && char <= 'z') {
            counts[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++;
        }
    }

    return counts;
}
