function solution(people, limit) {
    people.sort((a, b) => a - b);
    let boats = 0;
    let i = 0, j = people.length - 1;
    
    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            i++;
        }
        j--;
        boats++;
    }
    
    return boats;
}
