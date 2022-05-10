const axios = require("axios");

axios
  .get("http://hp-api.herokuapp.com/api/characters")
  .then(function (response) {
    const names = [];
    for (let i = 0; i < response.data.length; i++) {
      names.push(response.data[i].name);
    }
    console.log(names);
  });
