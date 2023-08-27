function solution(numbers, n) {
    var sum = 0;
    for (let num of numbers) {
        sum += num;
        if (sum > n) {
            return sum;
        }
    }
    return sum;
}
