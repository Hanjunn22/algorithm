function solution(myString) {
    return myString.split('').map(char => char < 'l' ? 'l' : char).join('');
}