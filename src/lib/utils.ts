export function snakeCase(text: string): string {
    return text.toLowerCase()
        .trim()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-")
}