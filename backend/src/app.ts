require('dotenv').config();
import express from 'express';
import config from 'config';
import cors from 'cors'
import { router } from './routes';

const app = express();
app.use(cors())
app.use(express.json())

app.use(router)


const port = config.get<number>('port');
app.listen(port)
console.log(`✅ Server started on port: ${port}`);