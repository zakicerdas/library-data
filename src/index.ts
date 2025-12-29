import app from './app';
import { PORT } from './utils/env';
import 'dotenv/config'; // Import dotenv to ensure environment variables are loaded

app.listen(PORT, () => {
  console.log(`Server MVC + Service Library-data jalan di http://localhost:${PORT}`);
  console.log(`Using DATABASE_URL: ${process.env.DATABASE_URL}`); // Log the DATABASE_URL
});