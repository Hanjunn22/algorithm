function solution(phone_book) {
    phone_book.sort(); // 전화번호를 사전 순으로 정렬
    for(let i = 0; i < phone_book.length - 1; i++) {
        if(phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    return true;
}
