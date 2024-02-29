function solution(bandage, health, attacks) {
    let currentHealth = health;
    let continuousSuccess = 0;
    let lastAttackTime = attacks[attacks.length - 1][0];
    let attackIndex = 0;

    for (let time = 0; time <= lastAttackTime; time++) {
        // 몬스터의 공격 처리
        if (attackIndex < attacks.length && attacks[attackIndex][0] === time) {
            currentHealth -= attacks[attackIndex][1];
            attackIndex++;
            continuousSuccess = 0; // 연속 성공 횟수 초기화
            if (currentHealth <= 0) return -1; // 캐릭터가 죽었는지 확인
            continue;
        }

        // 붕대 감기로 인한 체력 회복
        if (continuousSuccess < bandage[0]) {
            continuousSuccess++;
            currentHealth += bandage[1];
            if (continuousSuccess === bandage[0]) {
                currentHealth += bandage[2]; // 추가 회복
                continuousSuccess = 0; // 연속 성공 횟수 초기화
            }
        }

        // 최대 체력을 초과하지 않도록 체력 관리
        if (currentHealth > health) {
            currentHealth = health;
        }
    }

    return currentHealth;
}
