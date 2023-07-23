function isComposite(num) {
    let count = 0;
    for(let i = 1; i <= num; i++){
        if(num%i === 0){
            count++;
        }
        if(count >= 3){
            return true;
        }
    }return false;
}

function solution(n) {
    var answer = 0;
    let count = 0;
    for(let i = 1; i<=n; i++){
        if(isComposite(i)){
            answer++
        }
    }
    return answer;
}