function solution(tickets) {
    const routes = {};
    for (const [from, to] of tickets) {
        if (!routes[from]) routes[from] = [];
        routes[from].push(to);
    }

    for (const from in routes) {
        routes[from].sort(); // 알파벳 순으로 정렬
    }

    const answer = [];
    function dfs(airport) {
        const destinations = routes[airport];
        while (destinations && destinations.length > 0) {
            const nextAirport = destinations.shift(); // 알파벳 순으로 정렬된 첫 번째 도착지를 선택
            dfs(nextAirport);
        }
        answer.unshift(airport); // 뒤에서부터 경로를 구성
    }

    dfs("ICN"); // "ICN"에서 출발
    return answer;
}
