const express = require("express");
const app = express();
const port = process.env.PORT || 1977;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

app.set("view engine" , "ejs");
app.use(express.static("public"))

var methodOverride = require("method-override")
app.use(methodOverride("_method"))
const allRoutes = require("./routes/allRoutes")
const adduesrRoute = require("./routes/adduesr")

// Auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

mongoose
  .connect(
    "mongodb+srv://salemalgony3000:S012223462889@cluster0.getzspt.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() =>
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    })
  ).catch((err) => {
    console.log(err);
  });

  app.use(allRoutes)
  app.use(adduesrRoute)
  