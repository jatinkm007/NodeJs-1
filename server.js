const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Helper function to serve HTML files asynchronously
const serveFile = (filePath, statusCode, res) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>500 - Internal Server Error</h1>');
      return;
    }
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(data);
  });
};

// Route handler
const handleRequest = (req, res) => {
  const url = req.url;
  const pagesDir = path.join(__dirname, 'pages');

  console.log(`[${new Date().toISOString()}] ${req.method} ${url}`);

  switch (url) {
    case '/style.css':
      res.writeHead(200, { 'Content-Type': 'text/css' });
      fs.createReadStream(path.join(pagesDir, 'style.css')).pipe(res);
      return;
    case '/':
    case '/home':
      serveFile(path.join(pagesDir, 'home.html'), 200, res);
      break;
    case '/about':
      serveFile(path.join(pagesDir, 'about.html'), 200, res);
      break;
    case '/contact':
      serveFile(path.join(pagesDir, 'contact.html'), 200, res);
      break;
    case '/services':
      serveFile(path.join(pagesDir, 'services.html'), 200, res);
      break;
    default:
      serveFile(path.join(pagesDir, '404.html'), 404, res);
  }
};

// Create and start the server
const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Available routes: /home, /about, /contact, /services');
});