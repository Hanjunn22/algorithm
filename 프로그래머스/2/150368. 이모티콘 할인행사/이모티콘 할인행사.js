function solution(users, emoticons) {
    let maxSubscribers = 0;
    let maxSales = 0;
    
    // 할인율 조합 생성
    function generateDiscounts(index, discounts) {
        if (index === emoticons.length) {
            // 사용자 반응 시뮬레이션
            let [subscribers, sales] = simulateUsers(discounts);
            // 최적의 결과 업데이트
            if (subscribers > maxSubscribers || (subscribers === maxSubscribers && sales > maxSales)) {
                maxSubscribers = subscribers;
                maxSales = sales;
            }
            return;
        }
        for (let discount of [0.1, 0.2, 0.3, 0.4]) {
            generateDiscounts(index + 1, [...discounts, discount]);
        }
    }

    // 사용자 반응 시뮬레이션
    function simulateUsers(discounts) {
        let subscribers = 0;
        let sales = 0;
        users.forEach(user => {
            let [minDiscount, maxSpend] = user;
            let spend = 0;
            emoticons.forEach((price, index) => {
                let discountedPrice = price * (1 - discounts[index]);
                if (discounts[index] * 100 >= minDiscount) {
                    spend += discountedPrice;
                }
            });
            if (spend >= maxSpend) {
                subscribers += 1;
            } else {
                sales += spend;
            }
        });
        return [subscribers, sales];
    }

    generateDiscounts(0, []);
    return [maxSubscribers, maxSales];
}