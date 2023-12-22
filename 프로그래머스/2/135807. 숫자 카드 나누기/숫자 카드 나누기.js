function gcd(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function solution(arrayA, arrayB) {
    let gcd_A = arrayA[0];
    for (let num of arrayA) {
        gcd_A = gcd(gcd_A, num);
    }

    let result_A = gcd_A;
    for (let num of arrayB) {
        if (num % gcd_A === 0) {
            result_A = gcd_A / gcd(num, gcd_A);
        }
    }

    let gcd_B = arrayB[0];
    for (let num of arrayB) {
        gcd_B = gcd(gcd_B, num);
    }

    let result_B = gcd_B;
    for (let num of arrayA) {
        if (num % gcd_B === 0) {
            result_B = gcd_B / gcd(num, gcd_B);
        }
    }

    if (result_A > result_B) {
        return result_A;
    } else if (result_A === result_B) {
        return 0;
    } else {
        return result_B;
    }
}