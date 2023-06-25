const pool = require("./config");

async function get_feature_file(id) {
  const client = await pool.connect();
  const query = `SELECT f.title AS feature_title, f.value_statement, r.title AS rule_title, r.id AS rule_id FROM features AS f INNER JOIN rules AS r ON f.id = r.feature_id WHERE feature_id=${id}`;
  const result = await client.query(query);
  const feature = result.rows;
  client.release();
  return feature;
}

module.exports = get_feature_file;