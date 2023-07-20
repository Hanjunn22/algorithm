function solution(numbers) {
    let a = numbers.sort((a,b) => b - a);
    var answer = 0;
    answer = a[0] * a[1];
    return answer;
}