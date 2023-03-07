import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { paises } from '../desafio/modelUsuario';

const AppDataSource = new DataSource({
    type: 'oracle',
    host: '192.168.0.50',
    port: 1521,
    username: 'system',
    password: 'pulsati2023',
    database: 'xe',
    entities: [paises],
    migrations: [`${__dirname}/desafio/migrations/*.{ts,js}`],
})

export default AppDataSource;