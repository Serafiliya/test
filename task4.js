function drawRating(vote) {
    if (vote >= 0 && vote <= 100) {
        const star = Math.ceil(vote / 20);
        return '★'.repeat(star) + '☆'.repeat(5 - star);
    }
    return 'Число должно быть от 0 до 100';
}
