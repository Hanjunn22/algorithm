function solution(myString) {
    let splitStrings = myString.split('x');
    return splitStrings.map(str => str.length);
}
