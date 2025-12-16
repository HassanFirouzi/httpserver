const http = require("http");

const server = http.createServer((req, res) => {

  console.log("Merhaba dunya, basariyla istek attiniz!");


  console.log("\nISTEGIN METODU", req.method);

  switch (req.method) {
    case "GET":
      res.statusCode = 200;
      res.end("GET istegi basariyla attiniz!");
      break;
    case "POST":
      res.statusCode = 201;
      res.end("POST istegi basariyla attiniz!");
      break;

    case "PUT":
      res.statusCode = 201;
      res.end("PUT istegi basariyla attiniz!");
      break;

      case "PATCH":
      res.statusCode = 201;
      res.end("PATCH istegi basariyla attiniz!");
      break;
    case "DELETE":
      res.statusCode = 200;
      res.end("DELETE istegi basariyla attiniz!");
      break;
    default:
      res.statusCode = 405;
      res.end("istegi desteklenmiyor!");
      break;
    }

    
    // ^ ayni islevi if-else ile de yapabiliriz

    // const mtd = req.method;

    // if (mtd == "GET") {
    //      res.statusCode = 200;
    //      res.end("GET istegi basariyla attiniz!");
    // }
    // else if (mtd == "POST") {
    //     res.statusCode = 201;
    //     res.end("POST istegi basariyla attiniz!");
    // }
    // else if (mtd == "PUT" || mtd == "PATCH") {
    //     res.statusCode = 201;
    //     res.end(`PUT/PATCH istegi basariyla attiniz!`);
    // }
    // else if (mtd == "DELETE") {
    //     res.statusCode = 204;
    //     res.end();
    // }
    // else {
    //    res.statusCode = 405;
    //    res.end('istegi desteklenmiyor!');
    // }


});

server.listen(3000, () => {
  console.log("Sunucu calismaya basladi.");
});

