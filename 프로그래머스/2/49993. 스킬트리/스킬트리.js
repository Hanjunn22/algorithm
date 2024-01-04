function solution(skill, skill_trees) {
    let answer = 0;

    skill_trees.forEach((tree) => {
        let skillIndex = 0;
        let isValid = true;

        for (let i = 0; i < tree.length; i++) {
            const currentSkill = tree[i];
            const requiredIndex = skill.indexOf(currentSkill);

            if (requiredIndex === -1) continue;

            if (requiredIndex === skillIndex) {
                skillIndex++;
            } else {
                isValid = false;
                break;
            }
        }

        if (isValid) answer++;
    });

    return answer;
}