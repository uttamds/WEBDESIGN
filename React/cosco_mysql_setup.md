# Connect React App **cosco** to MySQL — Step-by-Step Guide

## 1. Project Layout
```
cosco/                  ← React app (frontend)
  └─ .env.local
  └─ src/
server/                 ← Node/Express API (backend)
  ├─ .env
  ├─ package.json
  └─ index.js
  └─ db.js
  └─ routes/
       └─ users.js
```

## 2. Create Projects & Install Tools

### Create React app
```bash
npx create-react-app cosco
```

### Backend setup
```bash
mkdir server
cd server
npm init -y
npm install express mysql2 dotenv cors
npm install --save-dev nodemon
```

Add to `server/package.json`:
```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

## 3. Prepare MySQL
```sql
CREATE DATABASE cosco_db;
USE cosco_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 4. Backend Environment Variables
`server/.env`:
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=cosco_db
PORT=5000
```

## 5. DB Connection (`server/db.js`)
```js
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
```

## 6. API Routes (`server/routes/users.js`)
```js
const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, email, created_at FROM users ORDER BY id DESC'
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const [result] = await pool.query(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    res.status(201).json({ id: result.insertId, name, email });
  } catch (err) {
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
```

## 7. Main Server (`server/index.js`)
```js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const usersRouter = require('./routes/users');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Cosco API is running'));
app.use('/api/users', usersRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## 8. React Environment Variable
`cosco/.env.local`:
```
REACT_APP_API_URL=http://localhost:5000
```

## 9. React Component (`Users.js`)
```jsx
import React, { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API}/api/users`)
      .then(res => res.json())
      .then(setUsers);
  }, [API]);

  const addUser = async e => {
    e.preventDefault();
    const res = await fetch(`${API}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    const newUser = await res.json();
    setUsers(prev => [newUser, ...prev]);
  };

  return (
    <div>
      <h2>Users</h2>
      <form onSubmit={addUser}>
        <input value={name} onChange={e=>setName(e.target.value)} required />
        <input value={email} onChange={e=>setEmail(e.target.value)} required />
        <button type="submit">Add</button>
      </form>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} — {u.email}</li>
        ))}
      </ul>
    </div>
  );
}
```

## 10. Commands Recap
```bash
npx create-react-app cosco
mkdir server
cd server
npm init -y
npm i express mysql2 dotenv cors
npm i -D nodemon
npm run dev   # backend
cd ../cosco
npm start     # frontend
```
