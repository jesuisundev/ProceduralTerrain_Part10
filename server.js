const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public"), {
    setHeaders: (res) => {
      res.set('Cross-Origin-Opener-Policy', 'same-origin');
      res.set('Cross-Origin-Embedder-Policy', 'require-corp');
    }
  }));
app.use("/", (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Cross-origin-Embedder-Policy', 'require-corp');
    res.setHeader('Cross-origin-Opener-Policy','same-origin');
    res.render("index")
});

app.listen(8080);