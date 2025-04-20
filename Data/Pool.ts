import PG from "pg";

const { Pool } = PG;

export const pool = new Pool({
  host: 'host',
  port: 5432,
  database: "database",
  user: "postgres",
  password: "password",
});
