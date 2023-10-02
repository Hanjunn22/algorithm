function solution(my_string, queries) {
    for(let i = 0; i < queries.length; i++){
        let [s, e] = queries[i];
        let reversedPart = my_string.slice(s, e+1).split('').reverse().join('');
        my_string = my_string.slice(0, s) + reversedPart + my_string.slice(e+1);
    }
    return my_string;
}
