export function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (const word of words) {
        if (word.length >= longest.length) {
            longest = word;
        }
    }
    return longest;
}

export function shortestWord(sentence) {
    const words = sentence.split(' ');
    let shortest = words[0];
    for (const word of words) {
        if (word.length <= shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}
export function wordLengths(sentence) {
    const words = sentence.split(' ');
    let totalLength = 0;
    for (const word of words) {
        totalLength += word.length;
    }
    return totalLength;
}
