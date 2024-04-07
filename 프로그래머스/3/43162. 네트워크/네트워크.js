function solution(n, computers) {
    let answer = 0;
    let visited = new Array(n).fill(false); // 방문 여부를 체크할 배열

    // DFS 함수 정의
    const dfs = (index) => {
        visited[index] = true; // 현재 컴퓨터 방문 처리
        for (let i = 0; i < n; i++) {
            // 현재 컴퓨터와 연결되어 있고, 아직 방문하지 않은 컴퓨터에 대해 DFS 수행
            if (computers[index][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    };

    // 모든 컴퓨터를 순회하며, 방문하지 않은 컴퓨터를 찾아 DFS 탐색을 시작
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++; // 새로운 네트워크 발견
        }
    }

    return answer;
}
