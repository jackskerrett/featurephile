const pkg = require('pg');
const { Client } = pkg;
const dotenv = require("dotenv");
dotenv.config();

export async function connectDb(query) {
    try {
      const client = new Client({
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
      });
      await client.connect();
      const res = await client.query("SELECT * FROM features");
      console.log(res);
      await client.end();
    } catch (error) {
      console.log(error);
    }
  };
  connectDb();