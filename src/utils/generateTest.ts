import words from "./words"

export default function generateTest(count : number) {
    const allWords = words()

    const result: string[] = [];

    while (result.length < count) {
        const randomIndex = Math.floor(Math.random() * allWords.length);
        result.push(allWords[randomIndex]);

    }

    return result
}