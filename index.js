const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bem-vindo ao servidor Node.js!');
  } else if (req.url === '/sobre' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Página sobre');
  } else if (req.url === '/contatos' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Página contatos');
  } else if (req.url === '/produtos' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Página produtos');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página não encontrada');
  }
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
