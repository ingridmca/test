var express = require("express");
var app = express();
const axios = require("axios");

app.get("/hp/characters", function (req, res) {
  axios
    .get("http://hp-api.herokuapp.com/api/characters")
    .then(function (response) {
      const names = [];
      for (let i = 0; i < response.data.length; i++) {
        names.push(response.data[i].name);
      }
      res.json(names);
    });
});

app.listen(3000);
