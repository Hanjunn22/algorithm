function solution(s) {
    let count = 0;
    let removedZeros = 0;

    while (s !== "1") {
        let lengthBefore = s.length;
        s = s.replace(/0/g, "");
        let lengthAfter = s.length;
        removedZeros += (lengthBefore - lengthAfter);

        s = lengthAfter.toString(2);
        count++;
    }

    return [count, removedZeros];
}