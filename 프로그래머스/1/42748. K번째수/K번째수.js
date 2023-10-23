function solution(array, commands) {
    var answer = [];
    for(let idx = 0; idx < commands.length; idx++){
        let [i, j, k] = commands[idx];
        let sliced = array.slice(i-1,j).sort((a,b) => a-b);
        answer.push(sliced[k-1]);
    }
    
    return answer;
}
