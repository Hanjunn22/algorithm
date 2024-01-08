function solution(participant, completion) {
    const nameMap = new Map();

    participant.forEach(name => {
        if (nameMap.has(name)) {
            nameMap.set(name, nameMap.get(name) + 1);
        } else {
            nameMap.set(name, 1);
        }
    });

    completion.forEach(name => {
        nameMap.set(name, nameMap.get(name) - 1);
    });

    for (let [name, count] of nameMap) {
        if (count > 0) {
            return name;
        }
    }
}
