import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config(
    {
        path: "../../.env"
    }
);

let connectionString = process.env.DATABASE_URL as string | undefined;

if (!connectionString) {
    throw new Error("DATABASE_URL is not set in the environment variables.");
}

export default {
    dbCredentials: {
        url: connectionString,
    },
    dialect: "postgresql",
    out: "./src/migrations",
    schema: "./src",
    breakpoints: true,
    verbose: true,
    strict: true,
} satisfies Config;