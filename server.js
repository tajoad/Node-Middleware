const http = require('http');
const port = 3020;

const server = http.createServer((clientRequest, clientResponse) => {
    const options = {
        hostname: 'http://localhost',
        port: '',
        path: '/api/v1/'
    };  
})