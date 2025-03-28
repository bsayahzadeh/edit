🟢 Sprint 1 – Backend MVP (Minimal Viable Product)
🎯 Ziel
Ein funktionsfähiges Backend, um den Bestellprozess für das EDIT Pop-up Café abzubilden:

Drinks anzeigen

Bestellungen aufnehmen

Bestellungen verwalten (Status ändern)

📂 Projektstruktur
pgsql
Copy
edit/
├─ server/
│  ├─ src/
│  │  ├─ config/
│  │  │   └─ db.js              → DB-Verbindung
│  │  ├─ controllers/
│  │  │   ├─ drinkController.js → Drinks-Logik
│  │  │   └─ orderController.js → Order-Logik
│  │  ├─ routes/
│  │  │   ├─ drinkRoutes.js     → Drinks-Endpoints
│  │  │   └─ orderRoutes.js     → Order-Endpoints
│  │  └─ app.js                 → Express-Server
│  ├─ .env                      → DB-Zugangsdaten
│  ├─ package.json
│  └─ .gitignore
└─ README.md
🗄️ Datenbank
Datenbankname: edit_app_db
Tabellen:

drinks → Liste aller verfügbaren Drinks

orders → Alle Bestellungen

order_items → Zuordnung Bestellung ↔ Drink

Beispieldaten:

Coffee-Drinks: Espresso, Cappuccino, Latte, Cold Brew, etc.

Bar-Drinks: Aperol Spritz, Hugo, Prosecco, Negroni, etc.

⚙️ Implementierte Endpoints
1. Alle Drinks abrufen (GET /drinks)
Beschreibung:
Liefert eine Liste aller verfügbaren Drinks.

Request:

bash
Copy
curl http://localhost:3000/drinks
Response:

json
Copy
[
  {
    "id": 1,
    "name": "Espresso",
    "basePrice": 2.5
  },
  ...
]
2. Bestellung anlegen (POST /orders)
Beschreibung:
Speichert eine neue Bestellung.

Request:

bash
Copy
curl -X POST http://localhost:3000/orders \
-H "Content-Type: application/json" \
-d '{"drinkId": 1}'
Response:

json
Copy
{"message":"Order created","orderId":1}
3. Alle Bestellungen abrufen (GET /orders)
Beschreibung:
Gibt alle bisherigen Bestellungen aus → für die Bar-Sicht.

Request:

bash
Copy
curl http://localhost:3000/orders
Response:

json
Copy
[
  {
    "id": 1,
    "status": "ordered",
    "createdAt": "2025-03-28T14:00:00.000Z",
    "drink": "Espresso"
  }
]
4. Bestellstatus ändern (PUT /orders/:id/status)
Beschreibung:
Ändert den Status einer Bestellung (z. B. auf „in process“ oder „ready“).

Request:

bash
Copy
curl -X PUT http://localhost:3000/orders/1/status \
-H "Content-Type: application/json" \
-d '{"status": "ready"}'
Response:

json
Copy
{"message":"Order status updated"}
✅ Sprint 1 Status: Abgeschlossen
Du hast jetzt ein stabiles Backend als Fundament für:

Bestellprozess

Bar-Ansicht

Weiterentwicklung