function solution(X, Y) {
    const frequencyX = countFrequency(X);
    const frequencyY = countFrequency(Y);
    let result = "";

    for (let i = 9; i >= 0; i--) {
        const commonFrequency = Math.min(frequencyX[i] || 0, frequencyY[i] || 0);
        result += String(i).repeat(commonFrequency);
    }

    if (result === "") return "-1";
    if (result[0] === "0") return "0";
    return result;
}

function countFrequency(number) {
    const frequency = Array(10).fill(0);
    for (let digit of number) {
        frequency[digit]++;
    }
    return frequency;
}
