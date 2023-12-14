function solution(babbling) {
    const validSounds = ["aya", "ye", "woo", "ma"];
    
    function isValidWord(word) {
        let remaining = word;
        
        while (remaining.length > 0) {
            const foundSound = validSounds.find(sound => remaining.startsWith(sound));
            
            if (!foundSound) {
                return false;
            }
            
            remaining = remaining.slice(foundSound.length);

            if (remaining.startsWith(foundSound)) {
                return false;
            }
        }
        
        return true;
    }

    return babbling.filter(isValidWord).length;
}