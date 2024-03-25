function solution(n, costs) {
    // 비용을 기준으로 간선 정렬
    costs.sort((a, b) => a[2] - b[2]);

    // 유니온-파인드를 위한 부모 배열 초기화
    const parent = Array.from({ length: n }, (_, index) => index);

    // 유니온-파인드 알고리즘의 find 함수
    function find(parent, x) {
        if (parent[x] !== x) {
            parent[x] = find(parent, parent[x]);
        }
        return parent[x];
    }

    // 두 원소가 속한 집합을 합치는 union 함수
    function union(parent, a, b) {
        a = find(parent, a);
        b = find(parent, b);
        if (a < b) {
            parent[b] = a;
        } else {
            parent[a] = b;
        }
    }

    let totalCost = 0; // 총 비용
    costs.forEach(([a, b, cost]) => {
        // 사이클이 발생하지 않는 경우(두 노드의 최상위 노드가 다른 경우)
        if (find(parent, a) !== find(parent, b)) {
            union(parent, a, b); // 두 노드를 연결
            totalCost += cost; // 비용 더하기
        }
    });

    return totalCost;
}
