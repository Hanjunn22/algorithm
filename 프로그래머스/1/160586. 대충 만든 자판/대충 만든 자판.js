function solution(keymap, targets) {
    let answer = [];

    for (const word of targets) {
        let times = 0;

        for (const char of word) {
            let flag = false;
            let time = 101;

            for (const key of keymap) {
                if (key.includes(char)) {
                    time = Math.min(key.indexOf(char) + 1, time);
                    flag = true;
                }
            }

            if (!flag) {
                times = -1; break;
            }

            times += time;
        }

        answer.push(times);
    }

    return answer;
}
