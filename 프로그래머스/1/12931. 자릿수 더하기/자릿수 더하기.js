function solution(n)
{
    var answer = 0;
    answer = String(n).split("").reduce((a, v) => a + Number(v), 0);

    return answer;
}
