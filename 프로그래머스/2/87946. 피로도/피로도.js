function solution(k, dungeons) {
    let maxDungeons = 0;

    function explore(fatigue, visited, count) {
        maxDungeons = Math.max(maxDungeons, count);

        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && fatigue >= dungeons[i][0]) {
                visited[i] = true;
                explore(fatigue - dungeons[i][1], visited, count + 1);
                visited[i] = false;
            }
        }
    }

    explore(k, Array(dungeons.length).fill(false), 0);
    return maxDungeons;
}