import express, { Express, Request, Response } from 'express';
import cors from 'cors'
import testsRouter from './routes/tests.route';

const app: Express = express();

app.use(cors())
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Running');
});

app.use('/tests', testsRouter);

export default app
