import { text } from "stream/consumers";

export function isJson(s: string): boolean {
  try {
    JSON.parse(s);
    return true;
  } catch (e) {
    return false;
  }
}

export function formatJson(json: string): string {
  try {
    const parsed = JSON.parse(json);
    return JSON.stringify(parsed, null, 2);
  } catch (e) {
    console.error("Invalid JSON provided for formatting:", e);
    return json; // Return the original string if parsing fails
  }
}

export function parseJson(json: string): any {
    try {
        return JSON.parse(json);
    } catch (e) {
        console.error("Invalid JSON provided for parsing:", e);
        return null; // Return null if parsing fails
    }
}

export function extractJson(text: string) {
    let openBrackets = 0;
    let startIndex = -1;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === '{') {
            if (openBrackets === 0) {
                startIndex = i;
            }
            openBrackets++;
        } else if (char === '}') {
            openBrackets--;
            if (openBrackets === 0 && startIndex !== -1) {
                return text.slice(startIndex, i + 1);
            }
        }
    }

    return ''; 
}

export function safeParseJson<T = Record<string, any>>(text?: string): T | undefined {
    if (typeof text !== 'string') {
        return undefined;
    }

    let json: T | undefined;
    try {
        json = JSON.parse(text);
    } catch {
        json = undefined;
    }

    return json;
}