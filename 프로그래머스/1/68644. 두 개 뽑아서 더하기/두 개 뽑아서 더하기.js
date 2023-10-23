function solution(numbers) {
    var answer = [];
    for(let i = 0; i<numbers.length; i++){
        for(let j = 0; j<numbers.length; j++){
            if(i!==j){
                answer.push(numbers[i]+numbers[j]);
            }
        } 
    }
    answer = answer.filter((value, index, self) => self.indexOf(value) === index).sort((a, b) => a - b);
    return answer;
}