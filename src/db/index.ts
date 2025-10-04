import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { attendanceLogsSchema } from './schema';


const connectionString = process.env.DATABASE_URL;

console.log(connectionString);

if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
}

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false });
export const db = drizzle({
    client,
    schema: {
        ...attendanceLogsSchema
    }
});
