import express, { Express } from 'express';
import cors from 'cors';
import 'dotenv/config';
import db from './config/database.js';
import apiRoutes from './routes/api.js';

const app: Express = express();
const PORT = process.env.PORT || 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${PORT}`;
const frontendOrigin = codespaceName
  ? `https://${codespaceName}-5173.app.github.dev`
  : 'http://localhost:5173';

app.use(cors({ origin: [frontendOrigin, 'http://localhost:5173'] }));
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.json({
    service: 'OctoFit Tracker API',
    status: 'running',
    baseUrl,
    routes: ['/api/health', '/api/users', '/api/teams', '/api/activities', '/api/leaderboard', '/api/workouts'],
  });
});

app.listen(PORT, () => {
  console.log(`OctoFit Tracker API is running on port ${PORT}`);
  console.log(`Frontend will connect to this API on ${baseUrl}`);
  console.log(`MongoDB connection status: ${db.readyState === 1 ? 'connected' : 'connecting'}`);
});

export default app;
