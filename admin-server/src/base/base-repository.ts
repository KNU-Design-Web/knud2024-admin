import postgres from "postgres";

export abstract class Repository {
    protected readonly sql: postgres.Sql;

    constructor() {
        this.sql = postgres(process.env.DATABASE_URL as string);
        console.log("Database connected");
    }
}
