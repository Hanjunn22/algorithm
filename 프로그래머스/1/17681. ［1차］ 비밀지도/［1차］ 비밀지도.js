function solution(n, arr1, arr2) {
    return arr1.map((v, i) => {
        let binStr = (v | arr2[i]).toString(2);  // OR 연산 후 이진수로 변환
        while (binStr.length < n) {
            binStr = '0' + binStr;  // n자리로 맞추기
        }
        return binStr.replace(/1/g, '#').replace(/0/g, ' ');  // 1은 #으로, 0은 공백으로 변환
    });
}