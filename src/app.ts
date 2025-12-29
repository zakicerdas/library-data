import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import productRoutes from './routes/product.route';
import { errorHandler } from './middlewares/error.handler';
import categoryRoutes from './routes/category.route';
import authorRoutes from './routes/author.route';
import transactionRoutes from './routes/transaction.route'; 
import authenticateRoutes from './routes/auth.route'
import userRoutes from './routes/user.route'
import profileRoutes from './routes/profile.route';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './utils/swagger'; 

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (_req, res) => {
  res.redirect('/api-docs');
}
);

app.use('/api/v1', userRoutes)
app.use('/api/v1', productRoutes);
app.use('/api/v1', categoryRoutes);
app.use('/api/v1', authorRoutes);
app.use('/api/v1', transactionRoutes);
app.use('/api/v1', authenticateRoutes);
app.use('/api/v1', profileRoutes);

app.use(errorHandler);

export default app;