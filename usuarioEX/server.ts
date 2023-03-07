import express from 'express';
import AppDataSource from './desafio/database';
import { serverPassageiro } from './desafio/serverPassageiro';

AppDataSource.initialize().then(() => {
    console.log('Conectado com sucesso ao banco');
    const app = express();
    app.use(express.json());
    
    app.post('/usuarios', new serverPassageiro().create);
    app.get('/usuarios/:id', new serverPassageiro().get);
    app.put('/usuarios/:id', new serverPassageiro().update);
    app.delete('/usuarios/:id', new serverPassageiro().delete);
  
    app.listen(8007);
  }).catch(e => console.log('Erro ao conectar ao banco: ', e))