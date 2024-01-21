function solution(n) {
    let answer = '';
    while (n > 0) {
        switch (n % 3) {
            case 1:
                answer = '1' + answer;
                break;
            case 2:
                answer = '2' + answer;
                break;
            case 0:
                answer = '4' + answer;
                n -= 1;
                break;
        }
        n = Math.floor(n / 3);
    }
    return answer;
}
