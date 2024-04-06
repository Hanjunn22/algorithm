function solution(user_id, banned_id) {
    const matchSets = banned_id.map(banned => 
        user_id.filter(user => 
            new RegExp(`^${banned.replace(/\*/g, '.')}$`).test(user)
        )
    );

    const resultSet = new Set();

    function generateCombinations(index, path) {
        if (index === matchSets.length) {
            const sortedPath = path.sort().join(',');
            resultSet.add(sortedPath);
            return;
        }
        
        matchSets[index].forEach(id => {
            if (!path.includes(id)) {
                generateCombinations(index + 1, [...path, id]);
            }
        });
    }

    generateCombinations(0, []);
    
    return resultSet.size;
}
