import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import productRoutes from './routes/product.route';
import { errorHandler } from './middlewares/error.handler';
import categoryRoutes from './routes/category.route';
import authorRoutes from './routes/author.route'

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Custom middleware (dari Hari 4)
app.use((req, res, next) => {
  req.startTime = Date.now();
  const apiKey = req.headers['x-api-key'] as string;
  if (!apiKey) return res.status(401).json({ success: false, message: 'Kirim header X-API-Key' });
  req.apiKey = apiKey;
  next();
});

app.get('/', (req, res) => {
  const waktu = Date.now() - (req.startTime || 0);
  res.json({ message: `Halo pemilik API Key: ${req.apiKey}!`, waktu_proses: `${waktu}ms` });
});

app.use('/api/v1', productRoutes);
app.use('/api/v1', categoryRoutes);
app.use('/api/v1', authorRoutes);

app.use(errorHandler);

export default app;