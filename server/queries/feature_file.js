const pool = require("./config");

async function get_feature_file(id) {
  const client = await pool.connect();
  const query = `SELECT title, value_statement FROM features WHERE id=${id}`;
  const result = await client.query(query);
  const feature = result.rows;
  client.release();
  return feature;
}

module.exports = get_feature_file;