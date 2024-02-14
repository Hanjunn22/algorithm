function solution(relation) {
    const cols = relation[0].length;
    const rows = relation.length;
    let candidates = [];

    for (let i = 1; i < (1 << cols); i++) {
        let set = new Set();
        for (let row = 0; row < rows; row++) {
            let key = '';
            for (let col = 0; col < cols; col++) {
                if (i & (1 << col)) {
                    key += relation[row][col];
                }
            }
            set.add(key);
        }
        if (set.size === rows && checkMinimality(candidates, i)) {
            candidates.push(i);
        }
    }

    return candidates.length;
}

function checkMinimality(candidates, current) {
    for (let candidate of candidates) {
        if ((candidate & current) === candidate) {
            return false;
        }
    }
    return true;
}
