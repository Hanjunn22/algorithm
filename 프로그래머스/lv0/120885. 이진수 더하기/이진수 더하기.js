function solution(bin1, bin2) {
    // 짧은 이진수의 앞에 0을 채워서 길이를 맞춰줍니다.
    const maxLength = Math.max(bin1.length, bin2.length);
    bin1 = bin1.padStart(maxLength, '0');
    bin2 = bin2.padStart(maxLength, '0');
    
    let carry = 0;
    let sum = '';

    // 뒤에서부터 각 자리수를 더하면서 자리 올림을 처리합니다.
    for (let i = maxLength - 1; i >= 0; i--) {
        const bit1 = parseInt(bin1[i]);
        const bit2 = parseInt(bin2[i]);

        const digitSum = bit1 + bit2 + carry;
        const resultBit = digitSum % 2;
        carry = Math.floor(digitSum / 2);

        // 덧셈 결과를 새로운 문자열에 추가합니다.
        sum = resultBit + sum;
    }

    // 마지막 자리수까지 더한 후에도 자리 올림이 남아있을 수 있습니다.
    if (carry === 1) {
        sum = '1' + sum;
    }

    return sum;
}
