function solution(routes) {
    // 차량의 경로를 진출 지점 기준으로 오름차순 정렬
    routes.sort((a, b) => a[1] - b[1]);
    
    let camera = -30001; // 카메라 초기 위치 설정
    let count = 0; // 설치된 카메라 수

    for (let i = 0; i < routes.length; i++) {
        if (camera < routes[i][0]) {
            // 현재 카메라 위치가 차량의 진입 지점보다 앞서면, 새로운 카메라 설치
            camera = routes[i][1]; // 새 카메라는 차량의 진출 지점에 설치
            count++; // 카메라 수 증가
        }
    }
    
    return count; // 필요한 카메라 수 반환
}
