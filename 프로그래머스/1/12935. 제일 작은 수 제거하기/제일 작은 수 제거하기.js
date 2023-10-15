function solution(arr) {
    if(arr.length === 1) {
        return [-1];
    } else {
        var min = Math.min(...arr);
        return arr.filter(num => num !== min);
    }
}
