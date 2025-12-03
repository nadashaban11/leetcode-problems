// leetCode 1941. Check if All Characters Have Equal Number of Occurrences

function areOccurrencesEqual(s: string): boolean {
    let freq = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        freq[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s.length - 1; i++) {
        if (freq[s.charCodeAt(i) - 97] !== freq[s.charCodeAt(i+1) - 97]) {
            return false;
        }
    }

    return true;
}
