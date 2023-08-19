function solution(chicken) {
    let coupon = chicken; // 초기 쿠폰 수 설정
    let serviceChickens = 0; // 서비스 치킨 수

    while (coupon >= 10) {
        const orderedChicken = Math.floor(coupon / 10); // 주문한 치킨 수
        serviceChickens += orderedChicken; // 서비스 치킨 추가
        coupon = coupon % 10 + orderedChicken; // 남은 쿠폰 갱신
    }

    return serviceChickens;
}