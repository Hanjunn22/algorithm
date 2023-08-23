function solution(babbling) {
        var str = ["aya", "ye", "woo", "ma"]; // 발음 할 수 있는 단어들
        var chk; //옹알이 한 단어
        var answer = 0; // 말할 수 있는 단어의 카운트 수 
        for(var i=0; i<babbling.length; i++) { //옹알이한 횟수 만큼 for문을 돈다.
             chk = babbling[i]; //이번에 말한 옹알이 단어
             for(var l=0; l<str.length; l++) { //발음 할 수 있는 단어만큼 for문을 돈다. 
                chk = chk.replace(str[l], "1"); //옹알이 단어에 발음할 수 있는 단어가 있다면 1로 바꾼다.
             }
             chk = chk.replaceAll("1", ""); //1을 공백으로 바꾼다.
             if (chk == "") { // 값이 없다면 즉, 옹알이 한 단어가 발음 할수 있는 단어로만 이루어져 있다면
                 answer = answer + 1; //말할 수 있는 단어의 카운트 수에 1을 더한다. 
             }
        }
        return answer;
}