function solution(arr) {
    let length = arr.length;
    if (Math.log2(length) % 1 === 0) return arr;
    let nextPowerOf2 = Math.pow(2, Math.ceil(Math.log2(length)));
    for (let i = length; i < nextPowerOf2; i++) {
        arr.push(0);
    }
    
    return arr;
}