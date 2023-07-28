function solution(s) {
    var answer = 0;
    let sSplit = s.split(" ");
    for(let i = 0; i<sSplit.length; i++){
        if(sSplit[i]==="Z"){
            answer -= sSplit[i-1];
        } else {
            answer += parseInt(sSplit[i]);
        }
    }
    return answer;
}