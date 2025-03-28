const db = require('../config/db');

// 🟢 Bestellung anlegen
exports.createOrder = async (req, res) => {
  const { drinkId } = req.body; // erwartet: { "drinkId": 1 }
  try {
    // Bestellung speichern
    const [orderResult] = await db.query('INSERT INTO orders (status) VALUES (?)', ['ordered']);
    const orderId = orderResult.insertId;

    // Drink zur Bestellung speichern
    await db.query('INSERT INTO order_items (order_id, drink_id) VALUES (?, ?)', [orderId, drinkId]);

    res.status(201).json({ message: 'Order created', orderId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB Error' });
  }
};

// 🔵 Alle Bestellungen abrufen (Bar-Ansicht)
exports.getOrders = async (req, res) => {
  try {
    const [orders] = await db.query(`
      SELECT o.id, o.status, o.createdAt, d.name AS drink
      FROM orders o
      JOIN order_items oi ON o.id = oi.order_id
      JOIN drinks d ON oi.drink_id = d.id
      ORDER BY o.createdAt DESC
    `);
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB Error' });
  }
};

// 🟠 Bestellstatus ändern
exports.updateOrderStatus = async (req, res) => {
  const orderId = req.params.id;
  const { status } = req.body;
  try {
    await db.query('UPDATE orders SET status = ? WHERE id = ?', [status, orderId]);
    res.json({ message: 'Order status updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'DB Error' });
  }
};
