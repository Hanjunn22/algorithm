function solution(n) {
    let str = n.toString();
    let answer = 0;
    
    for(i=0; i<str.length; i++){
        answer += Number(str[i]);
    }
    return answer;
}