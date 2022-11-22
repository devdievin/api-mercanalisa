import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { routes } from '../routes';

const app = express();

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.static(path.join(__dirname, '../../public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

export { app }