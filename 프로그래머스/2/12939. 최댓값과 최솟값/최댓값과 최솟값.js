function solution(s) {
    const numbers = s.split(' ').map(n => parseInt(n));

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return `${min} ${max}`;
}