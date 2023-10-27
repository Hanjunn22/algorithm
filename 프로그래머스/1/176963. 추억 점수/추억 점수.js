function solution(name, yearning, photo) {
    let yearningDict = {};
    for(let i = 0; i < name.length; i++) {
        yearningDict[name[i]] = yearning[i];
    }
    let result = [];
    for(let i = 0; i < photo.length; i++) {
        let memoryScore = 0;
        for(let j = 0; j < photo[i].length; j++) {
            if(yearningDict[photo[i][j]]) {
                memoryScore += yearningDict[photo[i][j]];
            }
        }
        result.push(memoryScore);
    }
    return result;
}
