/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let words = []
    let length = []

    for (let i = 0; i < sentences.length; i++) {
        words = sentences[i].split(" ")
        length.push(words.length)
    }
    let maxLength = Math.max(...length)
    return maxLength
};