function checkDistance(place) {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // 상, 하, 좌, 우
    const check = (x, y) => {
        for (let i = 0; i < directions.length; i++) {
            const [dx, dy] = directions[i];
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
                if (place[nx][ny] === 'P') return false;
                if (place[nx][ny] === 'O') {
                    for (let j = 0; j < directions.length; j++) {
                        const [dx2, dy2] = directions[j];
                        const nx2 = nx + dx2, ny2 = ny + dy2;
                        if (!(dx === -dx2 && dy === -dy2) && nx2 >= 0 && nx2 < 5 && ny2 >= 0 && ny2 < 5) {
                            if (place[nx2][ny2] === 'P') return false;
                        }
                    }
                }
            }
        }
        return true;
    };

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (place[i][j] === 'P' && !check(i, j)) return 0;
        }
    }
    return 1;
}

function solution(places) {
    return places.map(place => checkDistance(place));
}