function solution(order) {
    let orderString = order.toString();
    var answer = 0;
    
    for(i=0; i<orderString.length; i++){
        const digit = parseInt(orderString[i], 10);
        if(digit===3 || digit===6 || digit===9){
            answer++;
        }
    }
    return answer;
}