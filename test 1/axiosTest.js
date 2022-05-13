const axios = require("axios");
const names = [];
axios
  .get("http://hp-api.herokuapp.com/api/characters")
  .then(function (response) {
    console.log(response.data[0]);
    for (let i = 0; i < response.data.length; i++) {
      names.push(response.data[i].name + " - " + response.data[i].house);
    }
  });

axios
  .get("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
  .then(function (response) {
    console.log(response.data[0]);
  });
