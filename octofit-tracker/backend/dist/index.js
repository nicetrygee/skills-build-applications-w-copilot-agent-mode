import express from 'express';
import 'dotenv/config';
const app = express();
const PORT = process.env.PORT || 8000;
// Middleware
app.use(express.json());
// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});
// TODO: Add API routes
// Start server
app.listen(PORT, () => {
    console.log(`OctoFit Tracker API is running on port ${PORT}`);
    console.log(`Frontend will connect to this API on http://localhost:${PORT}`);
});
export default app;
//# sourceMappingURL=index.js.map