function solution(picture, k) {
    let result = [];

    for(let i = 0; i < picture.length; i++) {
        let expandedRow = '';

        for(let j = 0; j < picture[i].length; j++) {
            expandedRow += picture[i][j].repeat(k);
        }

        for(let l = 0; l < k; l++) {
            result.push(expandedRow);
        }
    }

    return result;
}