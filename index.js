const http = require('http');

// Resquest -> Petición o solicitud del cliente
// Response ->

http.createServer((request, response) => {
  // request.method
  // request.url
  // response.write('Hello world!'); // <-------- Se escribe la respuesta hacia el cliente
  // response.end('<h1>Hello world!</h1>');
  // <-Se envía la respuesta hacia el cliente <-Ya no es necesario escribir .write

  switch (request.url) {
    case '/':
      response.end('<h1>Hello world!</h1>');
      break;
    case '/rock':
      response.writeHead(200, {
        'content-Type': 'text/html; charset=utf-8',
      });
      response.end('<h1>Hello rock rók!</h1>');
      break;
    default:
      response.writeHead(200, {
        'content-Type': 'text/html; charset=utf-8',
      });
      response.writeHead(404);
      response.end('Esta página no existe');
      break;
  }
}).listen(8000);
