function solution(str1, str2) {
    const multiset = (str) => {
        const set = [];
        for (let i = 0; i < str.length - 1; i++) {
            const elem = str.substring(i, i + 2).toLowerCase();
            if (elem.match(/[a-z]{2}/)) {
                set.push(elem);
            }
        }
        return set;
    };

    const intersect = (set1, set2) => {
        const intersection = [];
        const tempSet2 = [...set2];
        set1.forEach(elem => {
            const index = tempSet2.indexOf(elem);
            if (index > -1) {
                intersection.push(elem);
                tempSet2.splice(index, 1);
            }
        });
        return intersection;
    };

    const union = (set1, set2) => {
        const unionSet = [...set1];
        set2.forEach(elem => {
            const index = set1.indexOf(elem);
            if (index === -1) {
                unionSet.push(elem);
            } else {
                set1.splice(index, 1);
            }
        });
        return unionSet;
    };

    const set1 = multiset(str1);
    const set2 = multiset(str2);
    const intersection = intersect(set1, set2);
    const unionSet = union(set1, set2);

    let similarity = 0;
    if (unionSet.length === 0) {
        similarity = 1;
    } else {
        similarity = intersection.length / unionSet.length;
    }
    
    return Math.floor(similarity * 65536);
}
