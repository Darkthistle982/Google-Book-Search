const express = require("express");
const app = express();
const routes = require("./routes");

// Send every request to the React app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
//Define API routes here
app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
