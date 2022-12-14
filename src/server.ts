import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import productsRouters from './routes/products.routes';
import usersRouters from './routes/users.routes';

app.use('/api/products', productsRouters);
app.use('/api/users', usersRouters);