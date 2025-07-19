type DebouncedFunction = (f: () => void) => void;

export function Debounce(d: number): DebouncedFunction {
    type Debouncer = {
        timer: NodeJS.Timeout | null;
    };

    const db: Debouncer = {
        timer: null
    };

    return (f: () => void) => {
        if (db.timer) {
            clearTimeout(db.timer);
        }

        const newTimer = setTimeout(() => {
            f();
            db.timer = null;
        }, d);

        db.timer = newTimer;
    };
}