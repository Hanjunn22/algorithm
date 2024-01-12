function solution(numbers) {
    let strNumbers = numbers.map(num => num.toString());
    strNumbers.sort((a, b) => (b + a) - (a + b));
    if(strNumbers[0] === '0') {
        return '0';
    }
    let answer = strNumbers.join('');
    return answer;
}
