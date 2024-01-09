import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import numbersRouter from './routes/numbersRouter';

const app = express();
app.use(express.json());

// Security Headers
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Routes
app.use('/api/numbers', numbersRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default app;
