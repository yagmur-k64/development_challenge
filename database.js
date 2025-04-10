const sqlite3 = require('sqlite3').verbose();

// Create a new SQLite database (or open it if it exists)
const db = new sqlite3.Database('./blog.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('✅ Connected to the SQLite database.');
});

// Create the "posts" table if it doesn't exist
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

module.exports = db;
