import { pool } from "./Pool";

export default async function queryHandler(query: string, params?: any) {
  const client = await pool.connect();
  try {
    const res = await client.query(query, params);
    return res.rows;
  } catch (err) {
    console.error(err);
    throw new Error('Error trying to retrive Records: ' + err);
  } finally {
    client.release();
  }
}

export async function queryOneHandler(query: string, params?: any) {
  const client = await pool.connect();
  try {
    const res = await client.query(query, params);
    return res.rows[0];
  } catch (err) {
    console.error(err);
    throw new Error('Error trying to retrive Records: ' + err);
  } finally {
    client.release();
  }
}