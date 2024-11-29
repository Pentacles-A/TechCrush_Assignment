const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Determine the file to serve based on the URL
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // Default to index.html
    } else {
        filePath += '.html'; // Append .html to the URL path
    }

    // Read and serve the HTML file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // If the file is not found, serve a 404 error
            if (err.code === 'ENOENT') {
                fs.readFile('./404.html', (err404, content404) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(content404, 'utf-8');
                });
            } else {
                // For any other errors, serve a 500 error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Serve the requested HTML file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, world!\n');
// });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });