function solution(players, callings) {
    const playerIndex = {};
    for (let i = 0; i < players.length; i++) {
        playerIndex[players[i]] = i;
    }
    
    for (let name of callings) {
        const idx = playerIndex[name];
        const prevIdx = idx - 1;

        [players[idx], players[prevIdx]] = [players[prevIdx], players[idx]];

        playerIndex[players[idx]] = idx;
        playerIndex[players[prevIdx]] = prevIdx;
    }

    return players;
}