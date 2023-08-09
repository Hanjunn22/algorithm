function solution(A, B) {
    const len = A.length;
    
    for (let i = 0; i < len; i++) {
        // A를 오른쪽으로 i번 밀기
        const shiftedA = A.slice(len - i) + A.slice(0, len - i);
        
        if (shiftedA === B) {
            return i; // 밀어야 하는 최소 횟수 반환
        }
    }
    
    return -1; // 밀어서 B가 될 수 없는 경우
}