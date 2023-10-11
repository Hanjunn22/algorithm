function solution(a, b, c, d) {
    const dice = [a, b, c, d];
    const counts = [0, 0, 0, 0, 0, 0, 0]; // index 0은 사용하지 않을 예정입니다.
    
    dice.forEach(num => counts[num]++);
    
    if(counts.includes(4)) {
        // 1번 경우: 네 주사위에서 나온 숫자가 모두 같다면
        return 1111 * dice[0];
    } else if(counts.includes(3)) {
        // 2번 경우: 세 주사위에서 나온 숫자가 같다면
        const three = counts.indexOf(3);
        const one = counts.indexOf(1);
        return (10 * three + one) ** 2;
    } else if(counts.includes(2) && counts.lastIndexOf(2) !== counts.indexOf(2)) {
        // 3번 경우: 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q라고 한다면
        const twoFirst = counts.indexOf(2);
        counts[twoFirst] = 0;
        const twoSecond = counts.indexOf(2);
        return (twoFirst + twoSecond) * Math.abs(twoFirst - twoSecond);
    } else if(counts.includes(2)) {
        // 4번 경우: 어느 두 주사위에서 나온 숫자가 같다면
        const two = counts.indexOf(2);
        const others = dice.filter(num => num !== two);
        return others[0] * others[1];
    } else {
        // 5번 경우: 네 주사위에 적힌 숫자가 모두 다르다면
        return Math.min(...dice);
    }
}