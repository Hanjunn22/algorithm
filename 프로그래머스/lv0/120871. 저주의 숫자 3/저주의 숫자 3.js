function containsThree(num) {
    return num.toString().includes('3');
}

function solution(n) {
    let num = 0;
    let count = 0;

    while(count < n) {
        num++;
        if(num % 3 === 0 || containsThree(num)) {
            continue;
        }
        count++;
    }

    return num;
}