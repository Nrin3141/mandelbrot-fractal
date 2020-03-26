let express = require("express");
let app = express();
let http = require("http").createServer(app);
let reload = require("reload");

app.use(express.static("public"));

reload(app)
  .then(function() {
    http.listen(3000, function() {
      console.log("listening on localhost:3000");
      if (process.send) {
        process.send("online");
      }
    });
  })
  .catch(function(err) {
    console.error(
      "Reload could not start, could not start server/sample app",
      err
    );
  });
