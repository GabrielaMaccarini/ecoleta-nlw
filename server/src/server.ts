import express, { response } from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errors());
app.listen(3333);

// REQUEST PARAM: Parâmetros que vem na própria rota que identificam um recurso
// QUERY PARAM: Parâmetros que vem na própria rota, geralmente opcionais para filtros, paginação, etc...
// REQUEST BODY: Parâmetros para criação/atualização de informações
