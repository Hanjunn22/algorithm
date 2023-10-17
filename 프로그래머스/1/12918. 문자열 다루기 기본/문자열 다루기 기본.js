function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }

    for (i of s) {
        if (isNaN(parseInt(i))) {
            return false;
        }
    }

    return true;
}