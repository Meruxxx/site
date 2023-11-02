import express from 'express';
import solicituddeservicioRoutes from './Routes/solicituddeservicio.routes';
const app = express();

app.use(expres.json());
app.use('/api',solicituddeservicioRoutes);
app.listen(3000);
console.log('Server on port', 3000);