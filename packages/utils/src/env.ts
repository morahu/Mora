import dotenv from 'dotenv';
import { get } from 'http';

dotenv.config(
    {
        path: '.env',
    }
);

export const getEnv = (key: string, defaultValue?: string): string => {
    const value = process.env[key];
    if (value === undefined) {
        if (defaultValue === undefined) {
            throw new Error(`Environment variable ${key} is not set`);
        }
        return defaultValue;
    }
    return value;
}

console.log(getEnv("DATABASE_URL"));