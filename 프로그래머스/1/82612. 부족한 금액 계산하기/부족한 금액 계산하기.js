function solution(price, money, count) {
    let totalCost = 0;
    for(let i = 1; i <= count; i++){
        totalCost += price * i;
    }
    const diff = money - totalCost;
    return diff < 0 ? -diff : 0;
}
