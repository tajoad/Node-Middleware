const { default: axios } = require("axios");
const { baseURL } = require("../config/config");

const getToken = async (request, response, next) => {
  const crendentials = "grant_type=client_credentials&scope=profile";

  axios({
    method: "POST",
    url: "https://apps.qa.interswitchng.com/passport/oauth/token",
    data: crendentials,
    headers: {
      Authorization:
        "Basic SUtJQTA2NTNEM0JCQkYwMDE2QTU0RTExNjkzNzYwNkJCQUNCN0E2NkE3RUY6K0hBQlRIUDV5Q0NSV3FZd3JQUXFFWmEvbUxmMlRZSmtWQjB0OWZoSjZPST0=",
      "content-type": "application/x-www-form-urlencoded",
    },
  })
    .then(function (res) {
      response.send({
        message: res.data,
        statusCode: res.status,
        date: res.headers.date,
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

module.exports = { getToken };
