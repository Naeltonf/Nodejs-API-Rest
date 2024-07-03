//criaação de um servidor local
import http from "http"; //biblioteca nativa do node

const PORT = 3000;

const rotas = {
    "/": "msg",
    "/route1": "rota 1",
    "/route2": "rota 2"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url])
});

server.listen(PORT, () => {
    console.log("servidor escutando!");
});


