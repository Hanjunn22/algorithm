function solution(my_string) {
    let words = my_string.split(/\s+/);
    return words.filter(word => word !== "");
}
