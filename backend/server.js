import express from 'express';
import connection from './db/connection.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server started");
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
