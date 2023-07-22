function solution(age) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let str = age.toString();
    let result = '';
    for(i=0; i<str.length; i++){
        result += alphabet[str[i]];
    }
    return result;
}
