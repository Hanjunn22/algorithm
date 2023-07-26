function solution(my_string) {
    var answer = 0;
    let currentNumber = '';
  
    for (let i = 0; i < my_string.length; i++) {
        const char = my_string[i];
      
        if (!isNaN(char)) { // 현재 문자가 숫자인지 검사
            currentNumber += char; // 현재 문자가 숫자라면 숫자 문자열에 추가
        } else if (currentNumber !== '') {
            answer += parseInt(currentNumber); // 숫자가 끝났으므로 현재까지의 숫자 문자열을 정수로 변환하여 합에 더함
            currentNumber = ''; // 숫자 문자열 초기화
        }
    }
  
    // 마지막으로 문자열 끝에 숫자가 있을 경우를 처리해주어야 합니다.
    if (currentNumber !== '') {
        answer += parseInt(currentNumber);
    }
  
    return answer;
}