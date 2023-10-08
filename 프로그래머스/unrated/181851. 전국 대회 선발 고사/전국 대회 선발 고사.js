function solution(rank, attendance) {
    let availableStudents = [];
    
    for(let i = 0; i < rank.length; i++) {
        if(attendance[i]) {
            availableStudents.push({
                number: i,
                rank: rank[i]
            });
        }
    }
    
    availableStudents.sort((a, b) => a.rank - b.rank);
    
    return 10000 * availableStudents[0].number + 
           100 * availableStudents[1].number + 
           availableStudents[2].number;
}
