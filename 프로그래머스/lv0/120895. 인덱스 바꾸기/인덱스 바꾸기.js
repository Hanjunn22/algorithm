function solution(my_string, num1, num2) {
    // 문자열을 배열로 변환
    let charArray = my_string.split('');

    // 두 인덱스의 문자 교환
    let temp = charArray[num1];
    charArray[num1] = charArray[num2];
    charArray[num2] = temp;

    // 배열을 문자열로 변환하여 결과 반환
    return charArray.join('');
}