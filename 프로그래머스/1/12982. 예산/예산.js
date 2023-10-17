function solution(d, budget) {
    let count = 0;
    let sum = 0;
    let sorted = d.sort((a,b) => a - b);
    for(let i = 0; i<sorted.length; i++){
        if(sum + sorted[i] <= budget){
            sum += sorted[i];
            count++;
        } else {
            break;
        }
    }
    return count;
}
