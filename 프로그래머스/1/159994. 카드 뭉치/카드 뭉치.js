function canFormGoal(cards1, cards2, goal, index1, index2) {
    if (index1 + index2 === goal.length) return true;

    let matchCards1 = index1 < cards1.length && cards1[index1] === goal[index1 + index2];
    let matchCards2 = index2 < cards2.length && cards2[index2] === goal[index1 + index2];

    if (matchCards1 && canFormGoal(cards1, cards2, goal, index1 + 1, index2)) return true;
    if (matchCards2 && canFormGoal(cards1, cards2, goal, index1, index2 + 1)) return true;

    return false;
}

function solution(cards1, cards2, goal) {
    return canFormGoal(cards1, cards2, goal, 0, 0) ? "Yes" : "No";
}
