function solution(s) {
    var answer = '';
    let half = s.length/2;
    if(s.length%2===0){
        answer = s[half-1] + s[half];
    } else {
        answer = s[(s.length-1)/2];
    }
    return answer;
}