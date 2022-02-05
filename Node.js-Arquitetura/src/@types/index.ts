import express from 'express';
import statusRoute from '../routes/status.route';
import usersRoute from '../routes/user.route';

const app = express();

// configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// configuração das rotas
app.use(usersRoute);
app.use(statusRoute)

// Inicia o servidor
app.listen(3000, () => {
    console.log('Listening on port 3000');
});
