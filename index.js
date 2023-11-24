const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'content-type': 'text/palin' });
        res.end("hello, World  ")

    }
    else if (req.url === "/revou") {
        res.writeHead(200, { 'content-type': 'text/palin' });
        res.end("hello, revou ")

    }
    else {
        res.writeHead(400, { 'content-type': 'text/palin' });
        res.end("salah url")

    }
})
const PORT = 3000;
const IP = '0.0.0.0'; // ip = 127.0.0.1 ini localhost komputer kita , karena inii mau deploy ke rainway jadi 0.0.0.0
server.listen(PORT, IP, () => {
    console.log("server Sudah Jalan")
})