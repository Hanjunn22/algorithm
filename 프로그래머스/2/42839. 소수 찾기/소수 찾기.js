function solution(numbers) {
    let numSet = new Set();

    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function makeNumbers(comb, leftNums) {
        if (comb.length > 0) {
            numSet.add(parseInt(comb));
        }

        for (let i = 0; i < leftNums.length; i++) {
            let newComb = comb + leftNums[i];
            let newLeftNums = leftNums.slice(0, i) + leftNums.slice(i + 1);
            makeNumbers(newComb, newLeftNums);
        }
    }

    makeNumbers('', numbers);

    let count = 0;
    numSet.forEach(num => {
        if (isPrime(num)) count++;
    });

    return count;
}