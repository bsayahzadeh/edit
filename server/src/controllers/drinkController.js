const db = require('../config/db');

exports.getAllDrinks = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM drinks');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB Error' });
  }
};
