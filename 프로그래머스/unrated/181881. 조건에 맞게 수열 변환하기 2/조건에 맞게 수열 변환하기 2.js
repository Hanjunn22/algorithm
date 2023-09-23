function solution(arr) {
    let answer = 0;
    let count = 0;
    let beforeArr = [...arr];
    
    while (count !== arr.length) {
        count = 0;
        beforeArr = [...arr];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0 && arr[i] >= 50) {
                arr[i] /= 2;
            } else if (arr[i] % 2 !== 0 && arr[i] < 50) {
                arr[i] = arr[i] * 2 + 1;
            }
            if (arr[i] === beforeArr[i]) count++;
        }
        answer++;
    }

    return answer - 1;
}