import app from './app';
import { PORT } from './utils/env';
import 'dotenv/config';

app.listen(PORT, () => {
  console.log(`Server MVC + Service Library Data jalan di http://localhost:${PORT}`);
  console.log(`Using DATABASE_URL: ${process.env.DATABASE_URL}`); 
});