function solution(arr) {
    const rows = arr.length;
    const cols = arr[0].length;
    
    if (rows > cols) {
        for (let i = 0; i < rows; i++) {
            for (let j = cols; j < rows; j++) {
                arr[i].push(0);
            }
        }
    } else if (cols > rows) {
        for (let i = rows; i < cols; i++) {
            arr.push(Array(cols).fill(0));
        }
    }
    
    return arr;
}
