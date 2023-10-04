function solution(arr, queries) {
    var answer = [];

    for(let query of queries) {
        let [s, e, k] = query;   
        let minVal = Infinity;

        for(let i = s; i <= e; i++){
            if(arr[i] > k && arr[i] < minVal){
                minVal = arr[i];
            }
        }

        answer.push(minVal === Infinity ? -1 : minVal);
    }

    return answer;
}
