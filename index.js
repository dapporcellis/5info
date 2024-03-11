import express from 'express';
import path from 'path';

const app = express();
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(path.resolve(), 'public')))

import router from './routes/routes.js'
app.use(router)

app.listen(port)