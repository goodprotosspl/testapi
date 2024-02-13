import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
}).promise();

export async function receiveData(){
    const [result] = await pool.query("SELECT * FROM test");
    return result;
}

export async function receiveSingleData(id){
    const [result] = await pool.query(`SELECT * FROM test WHERE id = ?`, [id]);
    return result[0];
}

export async function createData(test) {
    const result = await pool.query(`INSERT INTO test (test) VALUES (?)`, [test]);
    return 'query added!';
}