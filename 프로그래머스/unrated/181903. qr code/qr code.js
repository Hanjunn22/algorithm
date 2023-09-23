function solution(q, r, code) {
    var answer = '';
    let splited = code.split("");
    let arr = [];
    for(let i = 0; i<splited.length; i++){
        if(i % q === r){
            arr.push(splited[i]);
        }
    }
    answer = arr.join('');
    return answer;
}