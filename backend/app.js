// app.js
import express from 'express';
import morgan from 'morgan';
import routes from './routes/index.js';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from the frontend
  }));

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(morgan('dev')); // Logging middleware

// Routes
app.use('/api', routes); //all routes start with /api

// ESM doesn't give __dirname automatically, so we reconstruct it
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the dist folder that you generated in frontend
const distPath = path.join(__dirname, '../frontend/dist');

// Serve all files inside dist as static
app.use(express.static(distPath));

// --------------------------------------------------
// 3) Catch-all route that sends index.html
//    for any route not handled by your API
// --------------------------------------------------
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});


export default app;