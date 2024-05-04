const express = require ('express');
const morgan = require ('morgan')
const server = express();
const router = require('./src/routes/index')
const cors = require('cors')

server.use(cors());
server.use(morgan('dev'));

server.use(express.json());

server.use('/', router)

module.exports = server;
