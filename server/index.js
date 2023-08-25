import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import mainRoute from '../server/routes/drh.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/drh', mainRoute);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from server' });
});

app.listen(8000, () => {
  console.log('Server has started on port 8000');
});
