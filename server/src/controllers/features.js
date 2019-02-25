//
// ─── DATABASE SETUP ─────────────────────────────────────────────────────────────
//

const db = require('../db');

//
// ─── FEATURES CONTROLLER ───────────────────────────────────────────────────────────────────────
//

const createFeature = (req, res) => {
  const query = "INSERT INTO features (id, text, idea_id, user_id) VALUES ($1, $2, $3, $4)";
  const { id:feature_id, text, idea_id } = req.body;
  const values = [feature_id, text, idea_id, 'user1'];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.end('Feature added!');
  });
}

const getFeatures = (req, res) => {
  const query = 'SELECT * FROM features';
  
  db.query(query, (err, results) => {
    if (err) throw err;
    const features = results.rows;
    res.send(features);
  });
}

const updateFeature = (req, res) => {
  const query = "UPDATE features SET text=$1 WHERE id=$2";
  const { text, id:feature_id } = req.body;
  const values = [text, feature_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.end('Feature edited!');
  });
}

const deleteFeature = (req, res) => {
  const query = "DELETE FROM features WHERE id=$1";
  const { id:feature_id } = req.body;
  const values = [feature_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.end('Feature deleted!');
  });
}

const deleteFeaturesAfterIdeaDelete = (req, res) => {
  const query = 'DELETE FROM features WHERE idea_id=$1';
  const { id:idea_id } = req.body;
  const values = [idea_id];

  db.query(query, values, (err, result) => {
    if (err) throw err;
    res.send('Features deleted!');
  });
}

module.exports = {
  createFeature,
  getFeatures,
  updateFeature,
  deleteFeature,
  deleteFeaturesAfterIdeaDelete,
}