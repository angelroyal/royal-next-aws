export function TruncateLetters(description, maxlength) {
    const words = description.split(" ");
    return words.slice(0, maxlength).join(" ");
}
