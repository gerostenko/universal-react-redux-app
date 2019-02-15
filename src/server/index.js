import 'babel-polyfill';
import express from 'express';
import handleRender from './handleRender';

const server = express();

server.use(express.static(__dirname + '/public'));
server.use(handleRender);

server.listen(3000, () => console.log('Server listening on port 3000'));
