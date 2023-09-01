function solution(n_str) {
    while (n_str[0] === '0') {
        n_str = n_str.substring(1);
    }
    return n_str;
}
