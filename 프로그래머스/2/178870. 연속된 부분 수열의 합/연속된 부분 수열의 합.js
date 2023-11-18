function solution(sequence, k) {
    let start = 0, end = 0;
    let sum = 0;
    let minLength = Infinity;
    let answer = [-1, -1];

    while (end < sequence.length) {
        sum += sequence[end];

        while (sum > k) {
            sum -= sequence[start];
            start += 1;
        }

        if (sum === k) {
            if (end - start + 1 < minLength) {
                minLength = end - start + 1;
                answer = [start, end];
            }
        }

        end += 1;
    }

    return answer;
}