function solution(id_pw, db) {
    const [inputId, inputPw] = id_pw;

    for (const [dbId, dbPw] of db) {
        if (inputId === dbId) {
            if (inputPw === dbPw) {
                return "login";
            } else {
                return "wrong pw";
            }
        }
    }

    return "fail";
}