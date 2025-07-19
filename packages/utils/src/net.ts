export function isLocalUrl(url: string): boolean {
    try {
        return new URL(url).hostname === '127.0.0.1'
    } catch {
        return false;
    }
}

export function pathString(
    path: string, 
    {
        hash = '',
        search = '',
    }: {
        hash?: string;
        search?: string;
    } = {}
) {
    const tempBase = "https://example.com/"; // Temporary base URL to ensure URL parsing works
    const url = new URL(path, tempBase);
    url.hash = hash;
    url.search = search;
    return url.toString().replace(tempBase, '');
}