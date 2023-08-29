function solution(myString, pat) {
    let low = myString.toLowerCase();
    let lowPat = pat.toLowerCase();
    return low.includes(lowPat)? 1: 0;
}