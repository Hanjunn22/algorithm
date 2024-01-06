function solution(s) {
    // 문자열 분석 및 배열로 변환
    const sets = s.slice(2, -2).split('},{').map(set => 
        set.split(',').map(num => parseInt(num))
    );

    // 배열의 길이를 기준으로 정렬
    sets.sort((a, b) => a.length - b.length);

    // 튜플 재구성
    const tuple = [];
    sets.forEach(set => {
        set.forEach(num => {
            if (!tuple.includes(num)) {
                tuple.push(num);
            }
        });
    });

    return tuple;
}

