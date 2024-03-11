import express from 'express';
const app = express();
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

import router from './routes/routes.js'
app.use(router)

app.listen(port)