const sqlite3 = require('sqlite3').verbose();

// Verbindung zur SQLite-Datenbank herstellen
const db = new sqlite3.Database('users.db', (err) => {
  if (err) {
    console.error('Fehler beim Öffnen der Datenbank:', err.message);
  } else {
    console.log('Erfolgreich mit der SQLite-Datenbank verbunden');
  }
});

// Beispielabfrage an die SQLite-Datenbank senden
db.serialize(() => {
  db.each('SELECT name, password FROM users', (err, row) => {
    if (err) {
      console.error('Fehler beim Ausführen der Abfrage:', err.message);
    } else {
      console.log('Abfrageergebnis:', row);
    }
  });
});

// Verbindung zur SQLite-Datenbank beenden
db.close((err) => {
  if (err) {
    console.error('Fehler beim Schließen der Datenbank:', err.message);
  } else {
    console.log('Verbindung zur SQLite-Datenbank erfolgreich beendet');
  }
});