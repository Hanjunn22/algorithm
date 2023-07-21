function solution(cipher, code) {
    var answer = '';
    for(i=1; i<=i*code && i*code<=cipher.length; i++){
        answer += cipher[i*code-1]}
    return answer;
}