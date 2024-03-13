function solution(genres, plays) {
    const genreMap = {}; // 장르별 총 재생 횟수 및 노래 정보 저장
    genres.forEach((genre, i) => {
        if (!genreMap[genre]) {
            genreMap[genre] = { total: 0, songs: [] };
        }
        genreMap[genre].total += plays[i];
        genreMap[genre].songs.push({ id: i, plays: plays[i] });
    });

    // 장르별 총 재생 횟수 기준으로 정렬
    const sortedGenres = Object.entries(genreMap).sort((a, b) => b[1].total - a[1].total);

    const answer = [];
    sortedGenres.forEach(([genre, { songs }]) => {
        // 각 장르 내 노래를 재생 횟수(그리고 고유 번호)에 따라 정렬
        songs.sort((a, b) => b.plays - a.plays || a.id - b.id);
        // 장르별 최대 두 곡 선택
        songs.slice(0, 2).forEach(song => answer.push(song.id));
    });

    return answer;
}