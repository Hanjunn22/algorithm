function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}

function solution(W, H) {
    const GCD = gcd(W, H);
    return W * H - (W/GCD + H/GCD - 1) * GCD;
}
