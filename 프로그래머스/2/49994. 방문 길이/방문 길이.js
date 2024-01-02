function solution(dirs) {
    let visited = new Set(); // 방문한 경로를 저장할 집합
    let x = 0, y = 0; // 시작 위치

    for (let i = 0; i < dirs.length; i++) {
        let nx = x, ny = y;

        switch(dirs[i]) {
            case 'U': ny++; break;
            case 'D': ny--; break;
            case 'R': nx++; break;
            case 'L': nx--; break;
        }

        // 경계 체크
        if (nx < -5 || ny < -5 || nx > 5 || ny > 5) continue;

        // 경로 생성 (시작점과 끝점을 포함)
        let path = `${x},${y}-${nx},${ny}`;
        let reversePath = `${nx},${ny}-${x},${y}`;

        // 새로운 경로인 경우에만 집합에 추가
        if (!visited.has(path) && !visited.has(reversePath)) {
            visited.add(path);
        }

        // 캐릭터 위치 업데이트
        x = nx;
        y = ny;
    }

    return visited.size; // 처음 걸어본 길의 길이 반환
}