function solution(new_id) {
    // 1단계
    new_id = new_id.toLowerCase();

    // 2단계
    new_id = new_id.replace(/[^\w-_.]/g, '');

    // 3단계
    new_id = new_id.replace(/\.{2,}/g, '.');

    // 4단계
    new_id = new_id.replace(/^\.|\.$/g, '');

    // 5단계
    if (new_id === '') {
        new_id = 'a';
    }

    // 6단계
    new_id = new_id.slice(0, 15).replace(/\.$/, '');

    // 7단계
    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1];
    }

    return new_id;
}
