const express = require('express');
const router = express.Router();
const { createOrder, getOrders, updateOrderStatus } = require('../controllers/orderController');

// Bestellung anlegen
router.post('/', createOrder);

// Alle Bestellungen abrufen (Bar-Ansicht)
router.get('/', getOrders);

// Bestell-Status ändern (z. B. "in process" → "bereit")
router.put('/:id/status', updateOrderStatus);

module.exports = router;
