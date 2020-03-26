let express = require("express");
let app = express();
let http = require("http").createServer(app);

app.use(express.static("public"));

http.listen(3000, function() {
  console.log("listening on localhost:3000");
});