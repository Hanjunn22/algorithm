function solution(record) {
    const userMap = {};
    const actions = [];

    record.forEach((log) => {
        const [action, userId, nickname] = log.split(' ');

        if (action !== 'Leave') {
            userMap[userId] = nickname;
        }

        if (action !== 'Change') {
            actions.push({ action, userId });
        }
    });

    return actions.map(({ action, userId }) => {
        if (action === 'Enter') {
            return `${userMap[userId]}님이 들어왔습니다.`;
        } else if (action === 'Leave') {
            return `${userMap[userId]}님이 나갔습니다.`;
        }
    });
}
