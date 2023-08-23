function solution(num_list) {
    // 원소들의 합을 구한다.
    let sum = num_list.reduce((acc, curr) => acc + curr, 0);
    
    // 원소들의 곱을 구한다.
    let product = num_list.reduce((acc, curr) => acc * curr, 1);
    
    // 합의 제곱과 곱을 비교한다.
    return (product < sum * sum) ? 1 : 0;
}