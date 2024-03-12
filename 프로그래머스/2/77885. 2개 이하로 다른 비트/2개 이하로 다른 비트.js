function solution(numbers) {
    return numbers.map(n => {
        // 짝수인 경우, 마지막 비트가 0이므로 가장 오른쪽에 1을 추가하면 조건을 만족하는 가장 작은 수가 됩니다.
        if (n % 2 === 0) {
            return n + 1;
        } else {
            // 홀수인 경우, 비트 중 0이 나타나는 가장 낮은 위치를 찾아 그 위치를 1로 바꾸고
            // 바로 오른쪽 비트를 0으로 바꾸는 방식을 사용합니다.
            // JavaScript에서는 비트 연산 시 32비트 정수로 제한되므로, 
            // toString(2)와 같은 방법을 사용하여 비트 문자열로 처리할 수 있습니다.
            let binary = '0' + n.toString(2); // 앞에 0을 추가해 오버플로 방지
            let index = binary.lastIndexOf('0'); // 가장 낮은 0의 위치 찾기
            let mask = '1'.repeat(binary.length); // 모든 비트가 1인 마스크 생성
            // 지정된 위치에 있는 0을 1로, 그리고 바로 다음 비트를 0으로 변경
            binary = binary.substring(0, index) + '10' + binary.substring(index + 2);
            return parseInt(binary, 2); // 이진수를 정수로 변환
        }
    });
}