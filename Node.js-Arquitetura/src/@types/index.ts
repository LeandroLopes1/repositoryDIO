import express from 'express';
import errorHandler from '../middlewares/error-handler.middleware';
import statusRoute from '../routes/status.route';
import usersRoute from '../routes/user.route';

const app = express();

// configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configuração das rotas
app.use(usersRoute);
app.use(statusRoute)

// Configuração dos Handlers de erro
app.use(errorHandler);

// Inicia o servidor
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
