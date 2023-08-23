function solution(myString) {
    var answer = '';
    let splitMyString = myString.split("");
    for(let i = 0; i<splitMyString.length; i++){
        splitMyString[i] = splitMyString[i].toUpperCase(); // 변환된 값을 배열에 할당
    }
    answer = splitMyString.join("");
    return answer;
}
