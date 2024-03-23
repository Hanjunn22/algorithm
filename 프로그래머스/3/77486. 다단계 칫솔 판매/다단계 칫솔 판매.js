function solution(enroll, referral, seller, amount) {
    const profitMap = new Map(); // 판매원의 이름을 키로, 이익금을 값으로 하는 맵
    enroll.forEach(name => profitMap.set(name, 0)); // 초기 이익금은 모두 0으로 설정
    
    function distributeProfit(sellerName, amount) {
        let profit = amount * 100; // 칫솔 한 개당 이익 100원
        let currentSeller = sellerName;
        
        while (currentSeller !== "-" && profit > 0) {
            let parentProfit = Math.floor(profit * 0.1); // 상위 판매원에게 분배할 이익 (10%)
            let currentProfit = profit - parentProfit; // 현재 판매원이 가질 이익
            
            profitMap.set(currentSeller, profitMap.get(currentSeller) + currentProfit);
            
            if (parentProfit < 1) break; // 1원 미만인 경우 분배 중단
            
            profit = parentProfit; // 다음 분배를 위해 남은 이익 업데이트
            currentSeller = referral[enroll.indexOf(currentSeller)]; // 다음 추천인으로 이동
        }
    }
    
    for (let i = 0; i < seller.length; i++) {
        distributeProfit(seller[i], amount[i]); // 각 판매 건에 대해 이익 분배 실행
    }
    
    return enroll.map(seller => profitMap.get(seller)); // enroll 순서에 따른 이익금 배열 생성 및 반환
}