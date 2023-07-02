const pool = require("./config");

async function get_feature_file(id) {
  const client = await pool.connect();
  const query = `
  SELECT f.title AS feature_title,
  f.value_statement,
  json_agg(r.title) AS rule_title,
  json_agg(r.id) AS rule_id,
  json_agg(json_build_object('scenario_title', sc.title, "scenario_id", sc.id)) as SCENARIOS
  FROM features AS f
  INNER JOIN rules AS r ON f.id = r.feature_id
  INNER JOIN scenarios AS sc ON r.id = sc.rule_id
  WHERE feature_id=${id}
  GROUP BY f.title, f.value_statement`;
  const result = await client.query(query);
  const feature = result.rows;
  client.release();
  return feature;
}

module.exports = get_feature_file;