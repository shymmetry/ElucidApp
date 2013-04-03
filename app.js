var express = require("express");
var app = express();
app.use(express.bodyParser());

app.get("/static/:staticFilename", function (request, response) {
  response.sendfile("static/" + request.params.staticFilename);
});

app.listen(8889);