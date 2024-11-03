const reverseString = function(word) {
    let length = word.length;
    flipped_word = "";
    for(i = 0; i < length; i++) {
        char = word.slice(length - i - 1, length - i);
        flipped_word += char;
    }
    return flipped_word;
}

// Do not edit below this line
module.exports = reverseString;
