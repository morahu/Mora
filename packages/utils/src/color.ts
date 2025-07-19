export function HexToRgbColor (colorString: string): [number, number, number] {
    let hex = colorString;
    if (hex.startsWith('#')) hex = hex.slice(1);

    if (hex.length !== 3 && hex.length !== 4 && hex.length !== 6 && hex.length !== 8) {
        throw new Error(`Invalid hex color format: ${colorString}. Expected formats: #RGB, #RGBA, #RRGGBB, or #RRGGBBAA.`);
    }

    if (hex.length === 3 || hex.length === 4) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
        if (hex.length === 4) {
            hex += hex[3]; // Preserve alpha if present
        }
    }

    if (hex.length === 8) {
        hex = hex.slice(0, 6); // Ignore alpha channel for RGB conversion
    }

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return [r, g, b];
}

export function RgbToHexColor (r: number, g: number, b: number): string {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new Error(`RGB values must be between 0 and 255. Received: r=${r}, g=${g}, b=${b}`);
    }
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

export function getRelativeLuminance(color: string): number {
    // Wiki: https://en.wikipedia.org/wiki/Relative_luminance
    let [r, g, b] = HexToRgbColor(color);

    return (0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / 255;
}

export function isLightTextOnBackground(backgroundColor: string): boolean {
    // Check if the background color is light enough for dark text
    const luminance = getRelativeLuminance(backgroundColor);
    return luminance < 0.453;
}

export function getContrastColor(backgroundColor: string): string {
    return isLightTextOnBackground(backgroundColor) ? '#000000' : '#FFFFFF';
}