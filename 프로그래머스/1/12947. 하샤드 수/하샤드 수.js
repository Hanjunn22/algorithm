function solution(x) {
    var answer = true;
    let sum = Number(String(x).split("").reduce((a,v) => a + Number(v), 0));
    if(x%sum!==0){
        answer = false;
    }
    return answer;
}