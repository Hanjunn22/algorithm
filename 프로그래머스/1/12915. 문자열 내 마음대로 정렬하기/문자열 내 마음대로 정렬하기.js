function solution(strings, n) {
    return strings.sort((a, b) => {
        // n번째 글자가 같은 경우 전체 문자열로 정렬
        if(a[n] === b[n]) {
            return a.localeCompare(b);
        }
        // n번째 글자를 기준으로 오름차순 정렬
        return a[n].localeCompare(b[n]);
    });
}