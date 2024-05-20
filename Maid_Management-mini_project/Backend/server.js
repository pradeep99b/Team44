// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Initialize Express app
const app = express();
const PORT = 5000;

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'MadeforMaids'
});

// Connect to MySQL database
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});



// Registration endpoint
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, results) => {
            if (err) {
                console.error('Error executing registration query:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        console.error('Error hashing password:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error('Error executing login query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = results[0];
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user.id, email: user.email }, 'your-secret-key', { expiresIn: '1h' });
        res.json({ token });
    });
});


// Read cities
app.get('/cities', (req, res) => {
    db.query('SELECT * FROM cities', (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching cities');
        }
        res.send(results);
    });
});

// Read maids by city
app.get('/maids/:cityId', (req, res) => {
    const { cityId } = req.params;
    db.query('SELECT * FROM maids WHERE city_id = ?', [cityId], (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching maids');
        }
        res.send(results);
    });
});

// Read services
app.get('/services', (req, res) => {
    db.query('SELECT * FROM services', (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching services');
        }
        res.send(results);
    });
});

// CRUD operations for bookings

// Fetch all bookings
app.get('/bookings', (req, res) => {
    db.query(`
        SELECT 
            bookings.id, 
            bookings.city_id, 
            cities.name AS cityName, 
            bookings.maid_id, 
            maids.name AS maidName, 
            bookings.service_id, 
            services.name AS serviceName 
        FROM bookings 
        JOIN cities ON bookings.city_id = cities.id 
        JOIN maids ON bookings.maid_id = maids.id 
        JOIN services ON bookings.service_id = services.id
    `, (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching bookings');
        }
        res.send(results);
    });
});

// Create a new booking
app.post('/bookings', (req, res) => {
    const { cityId, maidId, serviceId } = req.body;
    db.query('INSERT INTO bookings (city_id, maid_id, service_id) VALUES (?, ?, ?)', [cityId, maidId, serviceId], (err, results) => {
        if (err) {
            return res.status(500).send('Error creating booking');
        }
        res.send({ id: results.insertId, cityId, maidId, serviceId });
    });
});

// Update an existing booking
app.put('/bookings/:id', (req, res) => {
    const { id } = req.params;
    const { cityId, maidId, serviceId } = req.body;
    db.query('UPDATE bookings SET city_id = ?, maid_id = ?, service_id = ? WHERE id = ?', [cityId, maidId, serviceId, id], (err, results) => {
        if (err) {
            return res.status(500).send('Error updating booking');
        }
        res.send({ id, cityId, maidId, serviceId });
    });
});

// Delete a booking
app.delete('/bookings/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM bookings WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error deleting booking');
        }
        res.send({ id });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
