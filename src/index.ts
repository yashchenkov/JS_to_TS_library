import express from 'express'
import path from 'path';
import bodyParser from 'body-parser'
require('dotenv').config()
import bookRoutes from './routes/bookRoutes'
import { db } from './infrastructure/db'
const PORT = process.env.PORT || 7070


const app = express()
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public/'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', bookRoutes);

app.listen(PORT, async () => {
    try {
        console.log(`Server listener  on port ${PORT}`);
        await db;

    } catch (e) {
        console.log(e);
    }
});