function solution(myStr) {
    let arr = myStr.split(/a|b|c/);
    arr = arr.filter(str => str && ![...str].every(ch => ['a', 'b', 'c'].includes(ch)));
    return arr.length ? arr : ["EMPTY"];
}