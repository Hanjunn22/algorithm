function solution(array) {
    let a = array.sort((a, b) => (a-b));
    let b = Math.floor(array.length/2);
    let answer = a[b];
    return answer;
}