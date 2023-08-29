function solution(myString, pat) {
    var answer = "";
    for(let i = 0; i<myString.length; i++){
        if(myString[i]==="A"){
            answer = answer.concat("B");
        } else {
            answer = answer.concat("A");
        }
    } 
    return answer.includes(pat) ? 1 : 0;
}