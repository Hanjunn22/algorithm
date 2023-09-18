function solution(arr) {
    let a = -1;
    let b = -1;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 2) {
            if (a === -1) a = i;
            b = i;
        }
    }
    
    if (a === -1 || b === -1) return [-1];

    return arr.slice(a, b + 1);
}
