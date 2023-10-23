function solution(food) {
    let halfFood = food.map(f => Math.floor(f / 2));
    let left = '', right = '';

    let remainders = food.map(f => f % 2);

    for(let i = 1; i < food.length; i++) {
        left += String(i).repeat(halfFood[i]);
        right = String(i).repeat(halfFood[i]) + right;
    }

    let center = '0';

    return left + center + right;
}
