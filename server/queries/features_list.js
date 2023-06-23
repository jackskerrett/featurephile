const pool = require("./config");

async function get_list_of_features() {
  const client = await pool.connect();
  const query = "SELECT id, title FROM features";
  const result = await client.query(query);
  const features = result.rows;
  client.release();
  console.log(features);
}

get_list_of_features();
