function solution(n) {
    let reversedN = n.toString(3).split('').reverse().join('');
    return parseInt(reversedN, 3)
}