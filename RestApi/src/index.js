import express from 'express';
import solicituddeservicioRoutes from './Routes/solicituddeservicio.routes.js';
const app = express();

app.use(express.json());
app.use('/api',solicituddeservicioRoutes);
app.listen(3000);
console.log('Server on port', 3000);