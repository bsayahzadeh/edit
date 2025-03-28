const express = require('express');
const cors = require('cors');
require('dotenv').config();
const drinkRoutes = require('./routes/drinkRoutes');
const orderRoutes = require('./routes/orderRoutes');



const app = express();

app.use(cors());
app.use(express.json());
app.use('/drinks', drinkRoutes);
app.use('/orders', orderRoutes);


app.get('/test', (req, res) => {
    res.json({ message: 'Express funktioniert!' });
  });
  

app.get('/', (req, res) => {
  res.send('EDIT Backend läuft!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
