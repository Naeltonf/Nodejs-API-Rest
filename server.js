//criaação de um servidor local
import http from "http"; //biblioteca nativa do node

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("msg")
});

server.listen(PORT, () => {
    console.log("servidor escutando!");
});


